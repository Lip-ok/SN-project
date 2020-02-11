import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    followAC,
    set_current_pageAC,
    set_users_total_countAC,
    set_usersAC,
    unfollowAC
} from "../../Redax/users-reducer";


let mapStateToProps =(state)=>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage: (currentPage) =>{
            dispatch(set_current_pageAC(currentPage))
        },
        setUsersTotalCount: (totalCount) =>{
            dispatch(set_users_total_countAC(totalCount))
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(Users);