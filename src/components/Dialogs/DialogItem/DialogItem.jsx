import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import FriendIcon from "../../Navbar/Friends/FriendsIcon/FriendIcon";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <FriendIcon/>
                <NavLink to={'/dialog/' + props.id}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;