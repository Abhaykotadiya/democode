import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date : new Date()
        }
        console.log("1 constructure")
    }

    tick = () => {
        this.setState({date: new Date()});
        console.log("tick");
      }

    componentDidMount = () => {
        this.timerID = setInterval(() => this.tick(),1000);
        console.log("3 componentDidMount");
      }

    componentDidUpdate = () => {
        console.log("4 componentDidUpdate")
    }

    componentWillUnmount = () => {
        clearInterval(this.timerID);
        console.log("componentWillUnmount");
      }
    
    
  render() {
      console.log("2 render");
    return (
      <div style={{textcolor:"red"}}>{this.state.date.toLocaleTimeString()}</div>
    )
  }
}
