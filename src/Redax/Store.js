import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
        _state: {
            profilePage: {
                postsData: [
                    {message: 'Hello bro!', count: 3},
                    {message: 'Yo', count: 14},
                    {message: 'WTF!?', count: 41}
                ],
                newPostText: ''
            },
            dialogPage: {
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
            },
            sidebar: {},

        },
        _callSubscriber(){
            console.log('update');
        },

        getState(){
            return this._state;
        },
        subscribe(observe){
            this._callSubscriber = observe;
        },

        dispatch(action){

            this._state.profilePage =  profileReducer(this._state.profilePage, action);
            this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
            this._state.sidebar = sidebarReducer(this._state.sidebar, action);

                this._callSubscriber(this._state);
        }
    }





export default store;
window.store = store;