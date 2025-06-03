import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Nav = () => {
    return(
        <>
        <ul className="navul"> 
            <li><Link to="/">Products</Link> </li>
            <li><Link to="/add">Add Products</Link> </li>
            <li><Link to="/update">Update Products</Link> </li>
            <li><Link to="/logout">log out</Link> </li>
            <li><Link to="/profile">profile</Link> </li>
            <li><Link to="/signup">Sign UP</Link></li>

        </ul>
        </> 
    )
}

export default Nav;