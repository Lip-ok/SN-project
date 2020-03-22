import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='http://dietkremlin.ru/img/logo0601.png'></img>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div> {props.login} - <button onClick={props.logout}>Log Out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}
export default Header;
