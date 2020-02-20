import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authMe, setAuthUserData} from "../../Redax/auth-reducer";



class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe()
        // authAPI.me().then(response => {
        //     if(response.data.resultCode === 0){
        //         let {id, email, login} = response.data.data
        //         this.props.setAuthUserData(id, email, login);
        //     }
        // })
    }

    render() {
        return (
           <Header {...this.props}/>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect (mapStateToProps, {setAuthUserData,authMe})(HeaderContainer);
