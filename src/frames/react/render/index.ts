import { SnippetString, window } from "vscode";

export default function render_virtual_dom() {
    let snippets = `let data = ['angular', 'react', 'vue'];
let trueDOM = document.querySelector('.test');
// <h1 className="red"><span>title</span></h1>
// <=>
// React.createElement('h1',{ className: red },React.createElement('span',{},'title'))
// JSX本质是一个语法糖 可以看出JSX的优点在多级嵌套时优势十分明显
let virtualDom = <ul>
    {data.map((v,i) => <li key={i}>{v}</li>)}
    </ul>;
ReactDOM.render(virtualDom, trueDOM);`;
    window.activeTextEditor?.insertSnippet(new SnippetString(snippets))
}