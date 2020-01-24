import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import UsersIcon from "../../Users/UsersIcon/UsersIcon";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <UsersIcon/>
                <NavLink to={'/dialog/' + props.id}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;