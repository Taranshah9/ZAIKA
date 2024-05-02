import React from 'react'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'


export default function Menuu() {
    
  return (
    <div>
        <nav>
        <div className="logo">ZAIKA</div>
          <div className="links">
            <Link to='/'>Back To Home</Link>
          </div>
      </nav>
        <Menu/>
        <Footer/>
    </div>
  )
}
