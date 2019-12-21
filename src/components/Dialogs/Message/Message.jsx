import React from 'react';
import s from './../Dialogs.module.css';
import FriendIcon from "../../Navbar/Friends/FriendsIcon/FriendIcon";



const Message = (props) =>{
    return(
        <div className={s.dialog}>
            <FriendIcon/>
            {props.message}
        </div>
    )
}
export default Message;