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
    
    /* 生命周期 */
    1.挂载
当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：

constructor()
static getDerivedStateFromProps(props, state){ return null || object} // 根据props初始化state
render()
componentDidMount()
}
2.更新(可以通过setState和forceUpdate(强制render))
当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：

static getDerivedStateFromProps(props, state){ return null || object} // 根据props初始化state
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate(prevProps, prevState){ return 传递给componentDidUpdate的数据}
componentDidUpdate(prevProps, prevState，接受getSnapshotBeforeUpdate给的数据)
3.卸载
当组件从 DOM 中移除时会调用如下方法：

componentWillUnmount()
4.错误处理
当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：

static getDerivedStateFromError()
componentDidCatch()



// 输入属性太多也可以用react和babel帮助实现的扩展语法<Weather {...props}/> props是对象
ReactDOM.render(<Weather month="march" date={23}/>, trueDOM);`;
            window.activeTextEditor?.insertSnippet(new SnippetString(snippets))
        }
    })
}
