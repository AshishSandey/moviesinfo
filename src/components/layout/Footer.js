import React from 'react'
import './Footer.css'

export default function() {
    return (
        <div className="footer-container">
            <div className="developer-info">
                Develped by : Ashish Sandey
            </div>
            <a 
                className="omdb" 
                href="http://www.omdbapi.com/" 
                target="_blank" 
                rel="noopener noreferrer"
            >Powered by : OMDB API</a>
        </div>
    )
}