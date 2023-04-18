import * as vscode from 'vscode';
import dealChooseReact from './react/index'
const window = vscode.window;


export default function dealChooseFrames() {
    window.showQuickPick(['react']).then(choose => {
        if (choose === 'react') {
            dealChooseReact();
        }
    })
}