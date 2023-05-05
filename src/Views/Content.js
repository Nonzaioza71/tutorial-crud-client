import React, { Component, Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Products from '../Components/Products/views'
import Home from '../Components/Home/views'

export default class Content extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const loading_screen = (<>
            <div className='position-fixed h-100 w-100 bg-dark'>

            </div>
        </>)
        return (
            <div className='container pt-5 ps-5 pe-5'>
                <div className='p-3'>
                    <Suspense fallback={loading_screen}>
                        <Routes>
                            <Route path='/' element={<Home {...this.props} exact={true} />} />
                            <Route path='/product/*' element={<Products {...this.props} />} />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        )
    }
}
