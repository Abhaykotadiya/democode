import React, { Component } from 'react'

export default class country extends Component {

    constructor(props) {
        super(props);
        
        this.country = {
            id:111,
            countryName:'u.s'
        }
    }
    changeCountryname =  () => {
        this.setCountry({
            countryName:'india'
        })
        // console.log('ok')
    }
  render() {
    return (
        <div>{this.country.countryName}
        <button onClick={() => this.changeCountryname()}>Change Country</button> 
        </div>
    )
  }
}
