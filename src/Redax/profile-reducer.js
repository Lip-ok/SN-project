import {authAPI, profileAPI, usersAPI} from "../api/api";

const UPDATE_POST_CHANGE = "UPDATE_POST_CHANGE";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {

    postsData: [
        {message: 'Hello bro!', count: 3},
        {message: 'Yo', count: 14},
        {message: 'WTF!?', count: 41}
    ],
    newPostText: '',
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: action.newPost,
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
        case SET_STATUS: {
            return {
                ...state,
               status: action.status,
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


export const addPostActionCreator = (newPost) => ({type: ADD_POST,newPost})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_POST_CHANGE, newText: text})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) =>(dispatch)=>{
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}

export const getStatus = (userId) =>(dispatch)=>{
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    })
}
export const updateStatus = (status) =>(dispatch)=>{
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0){
        dispatch(setStatus(status));
        }
    })
}


export default profileReducer;