import React, { Component } from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
export default class HomeComponent  extends Component {
  render() {
    return (
      <div className='home'>
        <h1 className='heading'>Quiz App</h1>
        <button className='play'><Link to='/quiz' className='play'>Play</Link></button>
      </div>
    )
  }
}
