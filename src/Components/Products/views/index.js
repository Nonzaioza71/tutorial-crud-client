import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Detail from './detail'
import Insert from './insert'
import Update from './update'
import View from './view'
import { getParams } from '../../../_helper/getParams'

export default class Main extends Component {
    constructor(props){
        super(props)
    
        this.state = { urlParams : ()=>getParams('/product/:view_type/:product_no') }
    }
    
    render() {
        return (
            <div>
                <h1 className='text-light mb-4'>Products</h1>
                <Routes>
                    <Route path='/' element={<View {...this.props} {...this.state} exact={true} />} />
                    <Route path='/detail/:product_no' element={<Detail {...this.props} {...this.state} />} />
                    <Route path='/update/:product_no' element={<Update {...this.props} {...this.state} />} />
                    <Route path='/insert' element={<Insert {...this.props} {...this.state} />} />
                </Routes>
            </div>
        )
    }
}
