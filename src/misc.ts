import * as vscode from "vscode";

export const items: Map<string, [vscode.CompletionItemKind, vscode.MarkdownString]> = new Map([
    [
        "if_succeeds",
        [
            vscode.CompletionItemKind.Keyword,
            new vscode.MarkdownString(
                `
                [\`if_succeds\` docs](https://docs.scribble.codes/language/lang-function-specifications#successful-termination)
                `.trim()
            )
        ]
    ],
    [
        "if_updated",
        [
            vscode.CompletionItemKind.Keyword,
            new vscode.MarkdownString(
                `
                [\`if_updated\` docs](https://docs.scribble.codes/language/state-variable-specifications#variable-updates)
                `.trim()
            )
        ]
    ],
    [
        "if_assigned",
        [
            vscode.CompletionItemKind.Keyword,
            new vscode.MarkdownString(
                `
                \`if_assigned\` docs
                `.trim()
            )
        ]
    ],
    [
        "invariant",
        [
            vscode.CompletionItemKind.Keyword,
            new vscode.MarkdownString(
                `
                [\`invariant\` docs](https://docs.scribble.codes/language/invariants#syntax)
                `.trim()
            )
        ]
    ],
    [
        "define",
        [
            vscode.CompletionItemKind.Keyword,
            new vscode.MarkdownString(
                `
                [\`define\` docs](https://docs.scribble.codes/language/user-defined-functions)
                `.trim()
            )
        ]
    ],
    [
        "let",
        [
            vscode.CompletionItemKind.Keyword,
            new vscode.MarkdownString(
                `
                [\`let-in\` docs](https://docs.scribble.codes/language/keywords#binding-return-values)
                `.trim()
            )
        ]
    ],
    [
        "old",
        [
            vscode.CompletionItemKind.Function,
            new vscode.MarkdownString(
                `
                [\`old\` docs](https://docs.scribble.codes/language/keywords#referring-to-the-previous-state)
                `.trim()
            )
        ]
    ]
]);
