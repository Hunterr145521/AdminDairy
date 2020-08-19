import React from 'react';

import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <p className="navbar-brand">Admin - Saheb Dairy</p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to={'/'}>Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to={"/List"}>Product List <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to={"/Add"}>Add Product <span className="sr-only">(current)</span></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export  default Navbar;
