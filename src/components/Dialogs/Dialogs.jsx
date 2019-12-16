import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    return(
        <div className={s.dialog  + ' ' + s.active}>
            <NavLink to={'/dialog/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) =>{
    return(
        <div className={s.dialog}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Siniy' id='1'/>
                <DialogItem name='Master' id='2'/>
                <DialogItem name='Volodya' id='3'/>
                <DialogItem name='Stas' id='4'/>
            </div>
            <div className={s.messages}>
               <Message message='Hi' />
               <Message message='Hi' />
               <Message message='Hi' />
               <Message message='Hi' />
            </div>
        </div>
    )
};
export default Dialogs;