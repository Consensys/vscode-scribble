import * as vscode from "vscode";
import { items } from "./misc";

function canSuggest(document: vscode.TextDocument, position: vscode.Position): boolean {
    const prefix = document.lineAt(position.line).text.trimLeft();
    const markers = ["///", "/*", "*"];

    if (!markers.some((marker) => prefix.startsWith(marker))) {
        return false;
    }

    const sharpIndex = prefix.indexOf("#");

    return sharpIndex > -1 && position.character > sharpIndex;
}

const completionProvider: vscode.CompletionItemProvider<vscode.CompletionItem> = {
    provideCompletionItems(document, position) {
        if (!canSuggest(document, position)) {
            return undefined;
        }

        const result: vscode.CompletionItem[] = [];

        for (const [label, data] of items) {
            const [kind, documentation] = data;

            result.push({ label, kind, documentation });
        }

        return result;
    }
};

const hoverProvider: vscode.HoverProvider = {
    provideHover(document, position) {
        if (!canSuggest(document, position)) {
            return undefined;
        }

        const wordRange = document.getWordRangeAtPosition(position);

        if (wordRange === undefined) {
            return undefined;
        }

        const word = document.getText(wordRange);
        const item = items.get(word);

        if (item === undefined) {
            return undefined;
        }

        const [, documentation] = item;

        return {
            contents: [documentation]
        };
    }
};

type VSCodeCommand = (...args: any) => any;

const insertIfSucceedsCommand: VSCodeCommand = () => {
    vscode.commands.executeCommand("editor.action.insertSnippet", {
        langId: "scribble",
        name: "if"
    });
};

export function activate(context: vscode.ExtensionContext): void {
    const disposables: vscode.Disposable[] = [
        vscode.languages.registerCompletionItemProvider("solidity", completionProvider),
        vscode.languages.registerHoverProvider("solidity", hoverProvider),

        vscode.commands.registerCommand("vscode-scribble.insertIfSucceeds", insertIfSucceedsCommand)
    ];

    context.subscriptions.push(...disposables);
}
