import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export default function() {
    return(
        <div className = 'navbar-container'>
            <ul className = 'nav-tiles'>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/developers'>Developers</Link>
                </li>

                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </div>
    )
}
