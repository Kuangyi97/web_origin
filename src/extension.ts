import * as vscode from 'vscode';
import dealChooseFrames from './frames/index'
const commands = vscode.commands;
const window = vscode.window;

export function activate(context: vscode.ExtensionContext) {
	let web = commands.registerCommand('web', () => {
		window.showQuickPick(['框架']).then(choose => {
			if (choose === '框架') {
				dealChooseFrames();
			}
		})
	});

	context.subscriptions.push(web);
}

export function deactivate() { }
