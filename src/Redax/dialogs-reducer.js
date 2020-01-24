const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState ={
        messageData: [
            {id: 1,message: 'Hi!'},
            {id: 2,message: 'Hi!'},
            {id: 3,message: 'Yo!'},
            {id: 4,message: 'Hello Bro!'}

        ],
        userData: [
            {id: 1, name: 'Siniy'},
            {id: 2, name: 'Master'},
            {id: 3, name: 'Volodya'},
            {id: 4, name: 'Stas'}
        ],
        newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) =>{

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
               ...state,
           newMessageBody: action.body,
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return{
                ...state,
            newMessageBody : "",
            messageData: [...state.messageData, {id: 6,message: body }],
            }
        default:
            return state;
    }

}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body})

export default dialogsReducer;