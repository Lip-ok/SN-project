import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redax/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () =>{
        props.store.dispatch(sendMessageActionCreator());
    }
    let onNewMessageChange = (body) =>{
   props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }

    return (<Dialogs updateNewMessageBody={onNewMessageChange}
                     sendMessage={onSendMessageClick}
                     dialogsPage={state}
    />)
};
export default DialogsContainer;