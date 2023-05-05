import React, { Component } from 'react'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';


export default class SideBar extends Component {
    render() {
        return (
            <div className='position-fixed' style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
                <CDBSidebar textColor="#fff" backgroundColor="#333">
                    {/* <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                        <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                            Sidebar
                        </a>
                    </CDBSidebarHeader> */}

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <NavLink exact to="/" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/product" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="table">Products</CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
                        <div
                            style={{
                                padding: '20px 5px',
                            }}
                        >
                            Sidebar Footer
                        </div>
                    </CDBSidebarFooter> */}
                </CDBSidebar>
            </div>
        )
    }
}
