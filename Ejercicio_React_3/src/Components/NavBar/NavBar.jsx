import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <ul>            
            <Link to={"/"} className='item'>Home</Link>
            <Link to={"/filter/Human"} className='item'>Humanos</Link>            
            <Link to={"/filter/Alien"} className='item'>Aliens</Link>            
        </ul>
    </nav>
  )
}

export default NavBar