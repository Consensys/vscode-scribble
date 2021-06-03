import * as vscode from "vscode";

export const items: Map<string, [vscode.CompletionItemKind, vscode.MarkdownString]> = new Map([
    [
        "if_succeeds",
        [
            vscode.CompletionItemKind.Keyword,
            new vscode.MarkdownString(
                [
                    "Syntax:",
                    "```solidity",
                    "/**",
                    ' * #if_succeeds <{:msg "property description"}> propertyCondition;',
                    " */",
                    "```",
                    "`if_succeeds` properties describe what a function is supposed to guarantee for succeeding executions.",
                    "",
                    "[Online documentation](https://docs.scribble.codes/language/lang-function-specifications#successful-termination)"
                ].join("\n")
            )
        ]
    ],
    [
        "if_updated",
        [
            vscode.CompletionItemKind.Keyword,
            new vscode.MarkdownString(
                [
                    "Syntax:",
                    "```solidity",
                    "/**",
                    ' * #if_updated <{:msg "property description"}> propertyCondition;',
                    " */",
                    "uint stateVariable;",
                    "```",
                    "`if_updated` properties describe what condition must hold when the annotated variable is written to.",
                    "",
                    "[Online documentation](https://docs.scribble.codes/language/state-variable-specifications#variable-updates)"
                ].join("\n")
            )
        ]
    ],
    [
        "if_assigned",
        [
            vscode.CompletionItemKind.Keyword,
            new vscode.MarkdownString(
                [
                    "Syntax:",
                    "```solidity",
                    "/**",
                    ' * #if_assigned <{:msg "property description"}> propertyCondition;',
                    " */",
                    "uint stateVariable;",
                    "```",
                    "`if_assigned` properties describe what condition must hold when the specified field of a variable is written to."
                ].join("\n")
            )
        ]
    ],
    [
        "invariant",
        [
            vscode.CompletionItemKind.Keyword,
            new vscode.MarkdownString(
                [
                    "Syntax:",
                    "```solidity",
                    "/**",
                    ' * #invariant <{:msg "property description"}> propertyCondition;',
                    " */",
                    "contract ContractName { ... }",
                    "```",
                    "`invariant`s describe conditions that should hold before and after the execution of the contract.",
                    "",
                    "[Online documentation](https://docs.scribble.codes/language/invariants#syntax)"
                ].join("\n")
            )
        ]
    ],
    [
        "define",
        [
            vscode.CompletionItemKind.Keyword,
            new vscode.MarkdownString(
                [
                    "Syntax:",
                    "```solidity",
                    "/**",
                    " * #define function_name(uint parameter) uint = 10 * parameter;",
                    " */",
                    "contract ContractName { ... }",
                    "```",
                    "`define` allows users to define Scribble predicates. These predicates can be used to re-use code between properties.",
                    "",
                    "[Online documentation](https://docs.scribble.codes/language/user-defined-functions)"
                ].join("\n")
            )
        ]
    ],
    [
        "let",
        [
            vscode.CompletionItemKind.Keyword,
            new vscode.MarkdownString(
                [
                    "Syntax:",
                    "```scr",
                    "let <variable> := <expression> in <expression>",
                    "```",
                    "`let` bindings allow us to write multi-step properties that deal with multiple variables.",
                    "",
                    "[Online documentation](https://docs.scribble.codes/language/keywords#binding-return-values)"
                ].join("\n")
            )
        ]
    ],
    [
        "old",
        [
            vscode.CompletionItemKind.Function,
            new vscode.MarkdownString(
                [
                    "Syntax:",
                    "```scr",
                    "old(<expression>)",
                    "```",
                    "The `old` keyword allows us to get the value of expressions at the beginning of functions' execution.",
                    "",
                    "[Online documentation](https://docs.scribble.codes/language/keywords#referring-to-the-previous-state)"
                ].join("\n")
            )
        ]
    ]
]);
