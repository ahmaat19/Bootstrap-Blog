import React from 'react'
import logo from '../img/logo.png'

const Header = () => {
    return (
        <>
        <div className="text-center mt-4">
            <img src={logo} />
        </div>
        <nav class="navbar navbar-expand-lg mt-3">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
           
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">HOME </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">FEATURES </a>
                </li>    
                <li class="nav-item">
                <a class="nav-link" href="#">BLOG STYLES </a>
                </li>  
                <li class="nav-item">
                <a class="nav-link" href="#">ABOUT </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">CONTACT </a>
                </li>      
            </ul>
            
            </div>
        </div>
        </nav>

        </>
    )
}

export default Header
