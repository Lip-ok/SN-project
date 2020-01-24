import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, set_usersAC, unfollowAC} from "../../Redax/users-reducer";


let mapStateToProps =(state)=>{
    return{
        users: state.usersPage.users
    }

}
let mapDispatchToProps =(dispatch)=>{
    return{
        follow: (userId) =>{
            dispatch(followAC(userId));
        },
        unfollow: (userId) =>{
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) =>{
            dispatch(set_usersAC(users))
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(Users);