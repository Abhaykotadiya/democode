import React, { Component } from 'react'

export default class country extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            id:111,
            countryName:'u.s'
        }
    }
    changeCountryname =  () => {
        this.setState({
            countryName:'india'
        })
        // console.log('ok')
    }
  render() {
    return (
        <div>{this.state.countryName}
        <button onClick={() => this.changeCountryname()}>Change Country</button> 
        </div>
    )
  }
}
