import React from 'react';
import logo from '../../common/images/logo/logo.svg';
import './Nav.scss';
import { Search } from '../search/Search';

export const Nav = () => {
    return (
        <nav className="navBar">
            <a
                href="localhost:3000/"
            >
                <img src={logo} alt="logo" className="logo" />
            </a>
            <Search />
        </nav>
    )
}