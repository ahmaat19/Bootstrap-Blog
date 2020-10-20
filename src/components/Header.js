import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const Header = () => {
  return (
    <>
      <div className='text-center mt-4'>
        <Link to='/'>
          <img src={logo} />{' '}
        </Link>
      </div>
      <nav class='navbar navbar-expand-lg mt-3'>
        <div class='container-fluid'>
          <button
            class='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarTogglerDemo01'
            aria-controls='navbarTogglerDemo01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarTogglerDemo01'>
            <ul class='navbar-nav mx-auto mb-2 mb-lg-0'>
              <li class='nav-item'>
                <Link
                  to='/'
                  class='nav-link active'
                  aria-current='page'
                  href='#'
                >
                  HOME{' '}
                </Link>
              </li>
              <li class='nav-item'>
                <Link to='/about' class='nav-link' href='#'>
                  ABOUT{' '}
                </Link>
              </li>
              <li class='nav-item'>
                <Link to='/contact' class='nav-link' href='#'>
                  CONTACT{' '}
                </Link>
              </li>
              <li class='nav-item'>
                <a href='#' class='nav-link' href='#'>
                  <i className='fa fa-search'></i>
                </a>
              </li>
            </ul>

            {/* <ul class='navbar-nav mx-right mb-2 mb-lg-0'>
              <div class='input-group '>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Search Article'
                />
                <span class='input-group-text' id='basic-addon2'>
                  <i className='fa fa-search'></i>
                </span>
              </div>
            </ul> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
