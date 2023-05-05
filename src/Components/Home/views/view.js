import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Chart } from 'chart.js'
export default class View extends Component {
    constructor(props) {
        super(props);
      }
    
      render() {
        return (
          <div>
            <h1 className='text-light'>Dashboard</h1>
            <hr className='text-light'/>
          </div>
        );
      }
}


