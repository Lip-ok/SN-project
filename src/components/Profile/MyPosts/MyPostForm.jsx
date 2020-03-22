import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const NewPostForm = (props) =>{
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text" placeholder='new post' name={"newPost"} component={Textarea}
                            validate={[required, maxLength10]}
                    />
                </div>
                <div>
                   <button>Add post</button>
                </div>

            </form>
    )
}

export const MyPostReduxForm = reduxForm({form: 'newPost'})(NewPostForm)

