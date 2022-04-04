import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id:101,
            stateName:'gujarat'
        }
    }

    changeStatename =  () => {
        this.setState({
            stateName:'rajesthan'
        })
    }
    
  render() {

    
    return (
      <div>{this.state.stateName}
      <button onClick={() => this.changeStatename()}>Change State</button> 
      </div>
    )
  }
}
