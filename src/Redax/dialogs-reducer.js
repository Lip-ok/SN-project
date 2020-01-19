const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SAND_MESSAGE = "SAND-MESSAGE";

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

    if(action.type === UPDATE_NEW_MESSAGE_TEXT){
        state.newMessageBody = action.body;

    }else if(action.type === SAND_MESSAGE){
        let body =state.newMessageBody;
      state.newMessageBody = "";
      state.messageData.push({id: 5,message: body })

    }
    return state;
}

export const sendMessageActionCreator = () => ({type: SAND_MESSAGE})
export const updateNewMessageBodyActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body})

export default dialogsReducer;