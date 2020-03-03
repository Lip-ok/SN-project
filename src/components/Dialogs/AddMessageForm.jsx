import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import LoginForm from "../Login/LoginForm";

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  placeholder='Write your message' name={"message"} component={"input"}/>
            </div>
            <div>
                <button>Enter</button>
            </div>
        </form>


    )
};
export const NewMessageReduxForm = reduxForm({form: 'newMessage'})(AddMessageForm)

export default AddMessageForm;