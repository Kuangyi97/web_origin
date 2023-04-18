import * as vscode from 'vscode';
import init_project from './init_project/index'
import render_virtual_dom from './render/index'
import create_component from './create_component/index'
const window = vscode.window;

export default function dealChooseReact() {
    window.showQuickPick(['react项目初始化', '渲染内容', '创建组件']).then(choose => {
        if (choose === 'react项目初始化') {
            init_project();
        }
        if (choose === '渲染内容') {
            render_virtual_dom();
        }
        if (choose === '创建组件') {
            create_component();
        }
    })
}