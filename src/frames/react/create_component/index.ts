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
            let snippets = `class Weather extends React.Component{
    // 用props-types来实现强制类型和默认值设置
    static propTypes = {    // 强制类型据说要在开发者模式下才生效
        month: PropTypes.string.isRequired,
        date: PropTypes.number,
    }
    static defaultProps = {
        month:'july',
        date: 15
    }

    // 设置拿子元素DOM的容器
    h3 = React.createRef();

    state = {
        isHot: true
    }
    // 有输入属性也不一定非要写constrctor
    constructor(props){
        super(props);
    }
    // switchWeather也可以用箭头函数来巧妙规避react方法中this指向undefine的问题（避免随意通过this修改组件实例上的值）
    // 如果switchWeather用箭头函数，下面绑定事件就不用bind了
    switchWeather(){
        let { isHot } = this.state;
        // 修改state只能通过setState
        this.setState({
            isHot: !isHot
        })
    }
    // 绑定事件用驼峰名
    // render 和 constructor可以拿到this
    // ref可以直接取名 在this.refs里面拿    也可以用回调函数的形式 <h3 ref={dom => this.h3 = dom}>{month} {date}</h3>
    render(){
        let { isHot } = this.state;
        let { month, date } = this.props;
        return (
            <div id='my-component'>
                {/* jsx加样式直接传一个对象 */}
                <h3 onClick={this.switchWeather.bind(this)} style={{opacity: 0.5}}>今天的天气真{isHot? '炎热' : '寒冷'}</h3>
                <h3 ref={this.h3}>{month} {date}</h3>
            </div>
        )
    }
    /* 生命周期函数 */ 
    constructor(props){
        super(props);
    }
    componentWillMount(){} // 计划废弃
    componentDidMount(){} // 一般在这里开定时器和AJAX请求
    shouldComponentUpdate(){}// 一般在setState时由底层调用, 返回false就不能update了
    componentWillUpdate(){} // 计划废弃
    componentDidUpdate(){}
    componentWillUnmount(){} // 手动卸载需要用ReactDOM.unmountComponentAtNode(DOM元素) 一般在这里面做一些收尾工作,比如关定时器回收一些资源
}
// 输入属性太多也可以用react和babel帮助实现的扩展语法<Weather {...props}/> props是对象
ReactDOM.render(<Weather month="march" date={23}/>, trueDOM);`;
            window.activeTextEditor?.insertSnippet(new SnippetString(snippets))
        }
    })
}
