import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {


    state={
        hasError: '' // 用于标识子组件是否产生错误
    }

    // 当parent的子组件出现报错时，会触发getDerivedStateFromError调用，并携带错误信息
    static getDerivedStateFromError(error) {
        console.log('@@@@@', error)
        return {hasError: error}
    }

    componentDidCatch() {
        console.log('此处统计错误，反馈给服务器，用于通知编码人员进行bug的解决')
    }

    render() {
        return (
            <div>
                <h1>Parent组件</h1>
                {this.state.hasError ? <h2>网络不稳定，稍后尝试</h2> : <Child />}
            </div>
        )
    }
}
