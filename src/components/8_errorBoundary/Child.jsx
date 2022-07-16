import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        // users: [
        //     {id: '001', name: 'tom', age: 18},
        //     {id: '002', name: 'jack', age: 8},
        //     {id: '003', name: 'jerry', age: 28}
        // ]
        users: 'abc'
    }
  render() {
    return (
      <div>
        <h1>Child组件</h1>
        {
            this.state.users.map(userObj => {
                return <h4 key={userObj.id}>{userObj.name}---{userObj.age}</h4>
            })
        }
      </div>
    )
  }
}
