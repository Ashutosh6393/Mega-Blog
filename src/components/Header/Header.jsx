import React from 'react';
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom';
import { UseSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const authStatus = useSelector((state)=>state.auth.status)
    return (
        <div>
            <h3>header</h3>
        </div>
    );
}

export default Header;
