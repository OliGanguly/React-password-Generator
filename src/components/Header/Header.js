import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header(props) {
    const navigate=useNavigate();
    return (
        <div className='navbar'>
            <ul className='nav-items'>
            <Link style={{textDecoration:"none",marginRight:"10px"}} to="/"><li>Password Generator</li></Link>
            <Link style={{textDecoration:"none",marginRight:"10px"}} to="/pagination"><li>Pagination</li></Link>
           
            </ul>
           
        </div>
    );
}

export default Header;