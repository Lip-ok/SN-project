const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SAND_MESSAGE = "SAND-MESSAGE";

const dialogsReducer = (state, action) =>{

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