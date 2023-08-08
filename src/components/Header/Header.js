import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header(props) {
    const navigate=useNavigate();
    return (
        <div className='navbar'>
            <ul className='nav-items'>
            <Link style={{textDecoration:"none",marginRight:"10px"}} to="/"><li>Pagination</li></Link>
            <Link style={{textDecoration:"none",marginRight:"10px"}} to="/passwordgenerator"><li>Password Generator</li></Link>
            </ul>
           
        </div>
    );
}

export default Header;