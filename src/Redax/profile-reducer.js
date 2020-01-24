const UPDATE_POST_CHANGE = "UPDATE-POST-CHANGE";
const ADD_POST = "ADD-POST";

let initialState = {

    postsData: [
        {message: 'Hello bro!', count: 3},
        {message: 'Yo', count: 14},
        {message: 'WTF!?', count: 41}
    ],
    newPostText: '',
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
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_POST_CHANGE, newText: text})

export default profileReducer;