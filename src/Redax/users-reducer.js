const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    } else {
                        return u;
                    }

                }),
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    } else {
                        return u;
                    }

                }),
            }
        }
        case SET_USERS:{
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }
        case SET_USERS_TOTAL_COUNT:{
            return {...state, totalUsersCount: action.count}
        }
        default:
            return state;
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const set_usersAC = (users) => ({type: SET_USERS, users})
export const set_current_pageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const set_users_total_countAC = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, count:totalUsersCount})

export default usersReducer;