import * as vscode from 'vscode';
import { getListDifference } from './commands/get-list-difference';
import { wrapperWith } from './utils/wrapper';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('wrapper-tools.double-quote-wrapper', () => wrapperWith('"')));
	context.subscriptions.push(vscode.commands.registerCommand('wrapper-tools.single-quote-wrapper', () => wrapperWith("'")));
	context.subscriptions.push(vscode.commands.registerCommand('wrapper-tools.single-quote-array-wrapper', () => wrapperWith("'", true)));
	context.subscriptions.push(vscode.commands.registerCommand('wrapper-tools.comma-wrapper', () => wrapperWith()));
	context.subscriptions.push(vscode.commands.registerCommand('wrapper-tools.array-wrapper', () => wrapperWith('', true)));
	context.subscriptions.push(vscode.commands.registerCommand('wrapper-tools.list-difference', getListDifference));
}

export function deactivate() {}
