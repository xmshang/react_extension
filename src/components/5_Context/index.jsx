import React, { Component } from 'react'
import './index.css'

const MyContext = React.createContext()
const { Provider, Consumer } = MyContext

export default class A extends Component {

    state = { username: 'Tom' }

    render() {
        const { username } = this.state
        return (
            <div className="parent">
                <h3>我是A组件</h3>
                <h4>我的用户名是：{this.state.username}</h4>
                <Provider value={username}>
                    <B />
                </Provider>
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className='child'>
                <h3>我是B组件</h3>
                <C />
            </div>
        )
    }
}

/* class C extends Component {
    // 声明接收context
    static contextType = MyContext
    render() {
        return (
            <div className='grand'>
                <h3>我是C组件</h3>
                <h4>我从A收到的用户名是：{this.context}</h4>
            </div>
        )
    }
} */

function C() {
    return (
        <div className='grand'>
            <h3>我是C组件</h3>
            <h4>我从A收到的用户名是
                <Consumer>
                    {
                        value => {
                            return `  名字：${value}`
                        }
                    }
                </Consumer>
            </h4>
        </div>
    )
}

