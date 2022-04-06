import React, { Component } from 'react'

export default class City extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            id:111,
            cityName:'rajkot'
        }
    }
    changeCityname =  () => {
        this.setState({
            cityName:'surat'
        })
        // console.log('ok')
    }

  render() {
    return (
      <div>{this.state.cityName}
      <button onClick={() => this.changeCityname()}>Change City</button>
      </div>
    )
  }
}
