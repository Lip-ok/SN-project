import React from 'react';
import s from './../Dialogs.module.css';
import UsersIcon from "../../Users/UsersIcon/UsersIcon";



const Message = (props) =>{
    return(
        <div className={s.dialog}>
            <UsersIcon/>
            {props.message}
        </div>
    )
}
export default Message;