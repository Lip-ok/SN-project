import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.userData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageDataElements = state.messageData.map(message => <Message message={message.message}/>);
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if(!props.isAuth) return <Redirect to={"/login"}/>

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageDataElements}</div>
                <div>
                    <textarea onChange={onNewMessageChange}
                              value={newMessageBody}
                              placeholder="Write you messages"></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Enter</button>
                </div>

            </div>

        </div>
    )
};
export default Dialogs;