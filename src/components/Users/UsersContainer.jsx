import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsersTotalCount,
    setUsers, toggleIsFetching,
    unfollow
} from "../../Redax/users-reducer";
import * as axios from "axios";
import Users from "./Users";

import Preloader from "../Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
            this.props.toggleIsFetching(false);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetching(false);
        })
    }

    render() {
        return (
            <div>
                <Preloader isFetching={this.props.isFetching}/>
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }

}
// let mapDispatchToProps =(dispatch)=>{
//     return{
//         follow: (userId) =>{
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) =>{
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) =>{
//             dispatch(set_usersAC(users))
//         },
//         setCurrentPage: (currentPage) =>{
//             dispatch(set_current_pageAC(currentPage))
//         },
//         setUsersTotalCount: (totalCount) =>{
//             dispatch(set_users_total_countAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) =>{
//             dispatch(toggle_is_fetchingAC(isFetching))
//         },
//     }
// }


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
})(UsersContainer);