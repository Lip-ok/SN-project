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
    let userData = [
        {id:'1', name:'Siniy' },
        {id:'2', name:'Master' },
        {id:'3', name:'Volodya' },
        {id:'4', name:'Stas' }
    ];

    let dialogElements = userData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );




    let messageData =[
        {message: 'Hi!'},
        {message: 'Hi!'},
        {message: 'Yo!'},
        {message: 'Hello Bro!'}

    ]

    let messageDataElements = messageData.map( message => <Message message={message.message} />);



const Dialogs = () => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageDataElements}
            </div>
        </div>
    )
};
export default Dialogs;