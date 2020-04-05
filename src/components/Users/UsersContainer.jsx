import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow, toggleFollowingProgress, requestUsers
} from "../../Redax/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../Redax/users-selects";


class UsersContainer extends React.Component {
    componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize)
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
                       toggleIsFetching={this.props.toggleIsFetching}
                       followingInProgress={this.props.followingInProgress}

                />
            </div>
        )
    }
}

//
// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
//
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
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

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers: requestUsers,
    }),
    withAuthRedirect
)(UsersContainer)
// let authRedirectComponent = withAuthRedirect(UsersContainer);

// export default connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setCurrentPage,
//     toggleFollowingProgress,
//     getUsers,
// })(authRedirectComponent);