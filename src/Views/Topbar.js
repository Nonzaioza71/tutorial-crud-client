import React, { Component } from 'react'
import NavBar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default class Topbar extends Component {
    render() {
        return (
            <div className='mb-5'>
                <NavBar bg="dark" expand="lg" className='fixed-top'>
                    <Container>
                        <NavBar.Brand className='text-light fs-3'>CRUD MVC Structure <label className='fs-6 text-secondary'>powered by EmpDEV</label></NavBar.Brand>
                    </Container>
                </NavBar>
            </div>
        )
    }
}
