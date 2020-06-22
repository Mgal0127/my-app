import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';;

const NavBar = () => (

    <div class="nav_body">
<nav class="navbar"  style={{position : 'fixed', padding: '0'}} >
        <ul class="navbar-nav">
        <li class="logo">
            <a href="#" class="nav-link">
            <span class="link-text logo-text">Dev Test</span>
            <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                class="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                class="fa-primary"
              ></path>
            </g>
          </svg>

            </a>
        </li>

        <li class="nav-item">
            <a href="/question_1" class="nav-link">
            <span class="link-text">Question 1</span>
            </a>
        </li>
        <li class="nav-item">
            <a href="/question_2" class="nav-link">
            <span class="link-text">Question 2</span>
            </a>
        </li>
        <li class="nav-item">
            <a href="/question_3" class="nav-link">
            <span class="link-text">Question 3</span>
            </a>
        </li>
        <li class="nav-item">
            <a href="/question_4" class="nav-link">
            <span class="link-text">Question 4</span>
            </a>
        </li>

        </ul>
    </nav>
    </div>
    
    // <nav>
    //     <ul>
    //         <li>
    //             <Link to="/question_1">Question 1</Link>
    //         </li>
    //         <li>
    //             <Link to="/question_2">Question 2</Link>
    //         </li>
    //         <li>
    //             <Link to="/question_3">Question 3</Link>
    //         </li>
    //     </ul>
    // </nav>
);

export default NavBar;