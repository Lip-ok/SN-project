import React from "react";
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) =>{
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text" placeholder='Login' name={"login"} component={"input"}/>
                </div>
                <div>
                    <Field type="text" placeholder='Password' name={"password"} component={"input"}/>
                </div>
                <div>
                    <Field type="checkbox" component={"input"} name={"rememberMe"}/> Remember me
                </div>
                <div>
                   <button>Login</button>
                </div>

            </form>
    )
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginForm;