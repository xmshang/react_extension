import React, { Component } from 'react'

export default class Demo extends Component {
    state = { count: 0 }

    add = () => {
        // 1)对象式的setState
        /* // 1. 获取原来的count
        const { count } = this.state
        // 2. 更新状态
        this.setState({ count: count + 1 }, () => {
            console.log('此行的输出：', this.state.count) // count + 1
        })
        // setState是同步的，react的状态更新是异步的
        console.log('此行的输出：', this.state.count) // 0 */

        // 2)函数式的setState
        this.setState(state => ({ count: state.count + 1 }))
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick={this.add}>点我+1</button>
            </div>
        )
    }
}
