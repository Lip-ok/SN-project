import React from "react";
import {Field, reduxForm} from "redux-form";



const NewPostForm = (props) =>{
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text" placeholder='new post' name={"newPost"} component={"textarea"}/>
                </div>
                <div>
                   <button>Add post</button>
                </div>

            </form>
    )
}

export const MyPostReduxForm = reduxForm({form: 'newPost'})(NewPostForm)

