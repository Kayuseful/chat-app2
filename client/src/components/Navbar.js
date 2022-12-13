import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ()=>{
    return (
        <nav>
            <ul>
                <li><NavLink to="/me" title='Edit Profile'><span className="material-icons md-light">account_circle</span></NavLink></li>
                <li><NavLink to="/dms" title='View Chats'><span className="material-icons md-light">chat</span></NavLink></li>
                <li><NavLink to="/groups" title='Join Groups'><span className="material-icons md-light">groups</span></NavLink></li>
                <li><NavLink to="/help"><span className="material-icons md-light">help</span></NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;