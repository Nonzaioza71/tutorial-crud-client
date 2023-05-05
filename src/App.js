import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {
  Topbar,
  Content,
  SideBar
} from './Views'


function App (props){

  return (
    <BrowserRouter>
      <Topbar {...props} />
      <SideBar {...props} />
      <Content {...props} />
    </BrowserRouter>
  )
  
}

export default App