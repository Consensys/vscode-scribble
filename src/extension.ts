import * as vscode from "vscode";

function canSuggest(document: vscode.TextDocument, position: vscode.Position): boolean {
    const prefix = document.lineAt(position.line).text.trimLeft();
    const markers = ["///", "/*", "*"];

    if (!markers.some((marker) => prefix.startsWith(marker))) {
        return false;
    }

    const sharpIndex = prefix.indexOf("#");

    return sharpIndex > -1 && position.character > sharpIndex;
}

export function activate(context: vscode.ExtensionContext): void {
    const completionProvider = vscode.languages.registerCompletionItemProvider("solidity", {
        provideCompletionItems(document, position) {
            if (!canSuggest(document, position)) {
                return undefined;
            }

            return [
                new vscode.CompletionItem("if_succeeds", vscode.CompletionItemKind.Class),
                new vscode.CompletionItem("if_updated", vscode.CompletionItemKind.Class),
                new vscode.CompletionItem("if_assigned", vscode.CompletionItemKind.Class),
                new vscode.CompletionItem("invariant", vscode.CompletionItemKind.Class),
                new vscode.CompletionItem("define", vscode.CompletionItemKind.Class),
                new vscode.CompletionItem("let", vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem(":msg", vscode.CompletionItemKind.Keyword)
            ];
        }
    });

    const insertIfSucceedsCommand = vscode.commands.registerCommand(
        "vscode-scribble.insertIfSucceeds",
        () => {
            vscode.commands.executeCommand("editor.action.insertSnippet", {
                langId: "scribble",
                name: "if"
            });
        }
    );

    context.subscriptions.push(completionProvider, insertIfSucceedsCommand);
}
