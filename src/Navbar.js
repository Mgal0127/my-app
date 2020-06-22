import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/question_1">Question 1</Link>
            </li>
            <li>
                <Link to="/question_2">Question 2</Link>
            </li>
            <li>
                <Link to="/question_3">Question 3</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;