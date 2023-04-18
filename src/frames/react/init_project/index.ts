import * as vscode from 'vscode';
const window = vscode.window;

export default function init_project() {
    window.showQuickPick(['标签引入', '脚手架搭建']).then(data => {
        if (data === '标签引入') {
            let snippets = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 标签引入react 要同时引入react和react-dom umd模块化浏览器端和服务端通用 -->
    <!-- babel用于解析JSX语法 引入babel-standalone版本 一次引入就可以解决问题 -->
    <script src="https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.development.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/babel-standalone/7.21.4/babel.min.js"></script>
    <title>标签引入react</title>
</head>
<body>
    <div class="test"></div>
    <!-- 要用babel解析JSX要加上type="text/babel" -->
    <script type="text/babel">
        /*代码在这里编写*/
    </script>
</body>
</html>`;
            window.activeTextEditor?.insertSnippet(new vscode.SnippetString(snippets));
        }
        if (data === '脚手架搭建') {
            window.activeTextEditor?.insertSnippet(new vscode.SnippetString('未完待续'));
        }

    })
} 