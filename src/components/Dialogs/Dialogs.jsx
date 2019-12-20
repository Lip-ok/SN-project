import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

    // let userData = [
    //     {id:'1', name:'Siniy' },
    //     {id:'2', name:'Master' },
    //     {id:'3', name:'Volodya' },
    //     {id:'4', name:'Stas' }
    // ];






    // let messageData =[
    //     {message: 'Hi!'},
    //     {message: 'Hi!'},
    //     {message: 'Yo!'},
    //     {message: 'Hello Bro!'}
    //
    // ]





const Dialogs = (props) => {
    let dialogElements = props.userData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );
    let messageDataElements = props.messageData.map( message => <Message message={message.message} />);
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