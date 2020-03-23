import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../validators/validators";
import s from "../Common/FormsControls/FormsControls.css";


const LoginForm = (props) =>{
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text" placeholder='Login' name={"email"} component={"input"}
                           validate={[required]}/>
                </div>
                <div>
                    <Field type="password" placeholder='Password' name={"password"} component={"input"}
                    validate={[required]}/>
                </div>
                <div>
                    <Field type="checkbox" component={"input"} name={"rememberMe"}/> Remember me
                </div>
                {   props.error && <div className={s.formSummaryError}>
                    {props.error}
                </div>}
                <div>
                   <button>Login</button>
                </div>

            </form>
    )
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginForm;