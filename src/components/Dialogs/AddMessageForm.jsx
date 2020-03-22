import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../validators/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  placeholder='Write your message' name={"message"} component={Textarea}
                        validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>Enter</button>
            </div>
        </form>


    )
};
export const NewMessageReduxForm = reduxForm({form: 'newMessage'})(AddMessageForm)

export default AddMessageForm;