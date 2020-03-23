import React from 'react';
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../Redax/profile-reducer";
import Profile from "./Profile";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }

}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

// let AuthRedirectComponent  = withAuthRedirect(ProfileContainer);
// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)
// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);
//
//
//
// export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);

