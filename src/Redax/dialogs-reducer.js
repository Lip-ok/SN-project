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
}

const dialogsReducer = (state = initialState, action) =>{

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            debugger
            return{
                ...state,
            messageData: [...state.messageData, {id: 6,message: body }],
            }
        default:
            return state;
    }

}

export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;