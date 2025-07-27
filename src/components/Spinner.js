import React, { Component } from 'react'
import  Loading from "./Loading.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Loading} alt="spinner" width={80} height={80}/>
      </div>
    )
  }
}
