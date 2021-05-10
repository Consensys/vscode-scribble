import * as vscode from "vscode";

export const items: Map<string, [vscode.CompletionItemKind, vscode.MarkdownString]> = new Map([
    [
        "if_succeeds",
        [
            vscode.CompletionItemKind.Keyword,
            new vscode.MarkdownString(
                `
                syntax: if_succeeds <{:msg "property description"}> propertyCondition;

                if_succeeds properties describe what a function is supposed to guarantee for succeeding executions.
                [\`if_succeeds\` docs](https://docs.scribble.codes/language/lang-function-specifications#successful-termination)
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
                syntax: 
                if_updated <{:msg "property description"}> propertyCondition;
                uint stateVariable;

                if_updates properties describe what condition must hold when the annotated variable is written to.
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
                syntax: 
                if_updated <{:msg "property description"}> propertyCondition;
                uint stateVariable;

                if_assigned properties describe what condition must hold when the specified field of a variable is written to.
                `.trim()
            )
            // \`if_assigned\` docs
        ]
    ],
    [
        "invariant",
        [
            vscode.CompletionItemKind.Keyword,
            new vscode.MarkdownString(
                `
                syntax: 
                invariant <{:msg "property description"}> propertyCondition;
                contract ContractName {...}

                Invariants describe conditions that should hold before and after the execution of the contract.
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
                syntax: 
                define function_name(uint parameter) uint = 10 * parameter;

                define allows users to define scribble predicates. These predicates can be used to re-use
                code between properties.
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
                syntax: let <variable> := <expression> in <expression>
                
                Let bindings allow us to write multi-step properties that deal with multiple variables.
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
                syntax: old(<expression>);

                The old keyword allows us to get the value of expressions at the beginning of functions' execution.
                [\`old\` docs](https://docs.scribble.codes/language/keywords#referring-to-the-previous-state)
                `.trim()
            )
        ]
    ]
]);
