import React from 'react'
//import {Link} from "react-router-dom"

import "./Header.css"

const Header = () => {
  return (
    <div className="header-container">
        {/* ACÁ VA UN <LINK> */}
            <h1>Barberok</h1>
        <div>
            <a href="https://www.instagram.com/_barberok" target="_blank" rel="noreferrer">
                <img src="./assets/img/instagram-icon.png" alt="instagram-icon"/>
            </a>
            <a href="https://wa.me/+5491163062103" target="_blank" rel="noreferrer">
                <img src="./assets/img/whatsapp-icon.png" alt="whatsapp-icon"/>
            </a>
        </div>
    </div>
  )
}

export default Header