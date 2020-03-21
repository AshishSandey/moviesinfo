import React from 'react'
import './Header.css'
import react_logo from './react-icon.png'
import imdb_logo from './imdb-icon.png'
import redux_logo from './redux-logo.svg'


export default function() {
    return (
        <div className = "header-container">
            <div className = "title">
                Movies Info
            </div>
            <ul className = "icons">
                <li>
                    <a href="https://www.imdb.com/" 
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src = {imdb_logo} alt = 'IMDb' />
                    </a>
                </li>
                <li>
                    <a href="https://reactjs.org/" 
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src = {react_logo} alt = 'React' />
                    </a>
                </li>
                <li>
                    <a href="https://redux.js.org/" 
                    target="_blank"
                    rel="noopener noreferrer">
                        <img src = {redux_logo} alt = 'React' />
                    </a>
                </li>
            </ul>
        </div>
    )
}