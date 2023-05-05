import React, { Component } from 'react'
import NavBar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { AiOutlineBars } from 'react-icons/ai'

export default class Topbar extends Component {
    _toggleSidebar(){
        let sidebar = document.querySelector('#sidebar')
        if (sidebar.classList.contains('d-none')) {
            sidebar.classList.remove('d-none')
        } else {
            sidebar.classList.add('d-none')
        }
    }
    render() {
        return (
            <div className='mb-5'>
                <NavBar bg="dark" expand="lg" className='fixed-top'>
                    <div className='btn btn-outline-light text-center ms-5' onClick={this._toggleSidebar}>
                        <AiOutlineBars className='fs-3 ms-5 me-5' />
                    </div>
                    <Container>
                        <NavBar.Brand className='text-light fs-3'>CRUD MVC Structure <label className='fs-6 text-secondary'>powered by EmpDEV</label></NavBar.Brand>
                    </Container>
                </NavBar>
            </div>
        )
    }
}
