import {authAPI, usersAPI} from "../api/api";

const UPDATE_POST_CHANGE = "UPDATE_POST_CHANGE";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {

    postsData: [
        {message: 'Hello bro!', count: 3},
        {message: 'Yo', count: 14},
        {message: 'WTF!?', count: 41}
    ],
    newPostText: '',
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: state.newPostText,
                count: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            };
        }
        case UPDATE_POST_CHANGE: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case SET_USER_PROFILE:{
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_POST_CHANGE, newText: text})

export const getUserProfile = (userId) =>(dispatch)=>{
    usersAPI.getPrifile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}


export default profileReducer;