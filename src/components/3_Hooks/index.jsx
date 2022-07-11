/* import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Demo extends Component {

    state = { count: 0 }

    myRef = React.createRef()

    add = () => {
        this.setState(state => ({count: state.count + 1}))
    }

    show = () => {
        alert(this.myRef.current.value)
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState(state => ({count: state.count + 1}))
        }, 1000);
    }

    unmount = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    

    render() {
        return (
            <div>
                <input type="text" ref={this.myRef}/>
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.unmount}>卸载组件</button>
                <button onClick={this.show}>点击提示数据</button>
            </div>
        )
    }
} */

import React from 'react'
import ReactDOM from 'react-dom'

function Demo() {
    const [count, setCount] = React.useState(1)

    const myRef = React.useRef()

        React.useEffect(() => {
            console.log('@@')
            const timer = setInterval(() => {
                setCount(count => count + 1)
            }, 1000);
            return () => {
                clearInterval(timer)
            }
        }, [])

    function add() {
        // setCount(count + 5) // 第一种写法
        setCount(count => count + 1)
    }

    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    function show() {
        alert(myRef.current.value)
    }

    return (
        <div>
            <input type="text" ref={myRef} />
            <h1>当前求和为：{count}</h1>
            <button onClick={add}>点我+1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点我显示数据</button>
        </div>
    )
}

export default Demo
