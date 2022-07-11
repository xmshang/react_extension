import React, { Component } from 'react'
import './index.css'

export default class Parent extends Component {


    state = { carName: '奔驰' }

    changeCar = () => {
        this.setState({ carName: '迈巴赫' })
    }

    render() {
        console.log('----------parent')
        const {carName} = this.state
        return (
            <div className='parent'>
                <h1>Parent组件</h1>
                <span>我的车名是：{carName}</span><br />
                <button onClick={this.changeCar}>点我换车</button>
                <Child carName={carName}/>
            </div>
        )
    }
}


class Child extends Component {
    render() {
        console.log('----------child')
        return (
            <div className='child'>
                <h1>Child组件 </h1>
                <span>我接到的车是： {this.props.carName}</span>
            </div>
        )
    }
}

