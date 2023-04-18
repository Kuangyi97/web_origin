import { window, SnippetString } from 'vscode'

export default function create_component() {
    window.showQuickPick(['工厂函数组件', '类组件']).then(data => {
        if ('工厂函数组件') {
            let snippets = `function Mycomponent(){
    return (
        <div id='my-component'></div>
    )
}
ReactDOM.render(virtualDom, trueDOM);`;
            window.activeTextEditor?.insertSnippet(new SnippetString(snippets))
        }
        if ('类组件') {
            let snippets = ``;
            window.activeTextEditor?.insertSnippet(new SnippetString(snippets))
        }
    })
}