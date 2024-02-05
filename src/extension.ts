import * as vscode from "vscode";
import { items } from "./misc";

enum SupportedLanguages {
    Solidity = "solidity",
    Scribble = "scribble"
}

function canSuggest(document: vscode.TextDocument, position: vscode.Position): boolean {
    if (document.languageId === SupportedLanguages.Scribble) {
        return true;
    }

    const prefixLine = document.lineAt(position.line).text.trimLeft();
    const markers = ["///", "/*", "*"];

    if (!markers.some((marker) => prefixLine.startsWith(marker))) {
        return false;
    }

    const sharpIndex = prefixLine.lastIndexOf("#");
    const semiIndex = prefixLine.lastIndexOf(";");
    const curPos = position.character;

    if (sharpIndex > -1) {
        if (semiIndex > sharpIndex) {
            return sharpIndex < curPos && curPos < semiIndex;
        }

        return sharpIndex < curPos;
    }

    /**
     * @todo Fix case when predicate spreads across multiple lines,
     * while current position is in the middle line between sharp and semicolon.
     */
    return false;
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

        return new vscode.CompletionList(result);
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

        return new vscode.Hover([documentation]);
    }
};

export function activate(context: vscode.ExtensionContext): void {
    const disposables: vscode.Disposable[] = [];

    for (const language of Object.values(SupportedLanguages)) {
        const selector = { scheme: "file", language };

        disposables.push(
            vscode.languages.registerCompletionItemProvider(selector, completionProvider),
            vscode.languages.registerHoverProvider(selector, hoverProvider)
        );
    }

    context.subscriptions.push(...disposables);
}
