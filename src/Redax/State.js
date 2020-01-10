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
                    {message: 'Hi!'},
                    {message: 'Hi!'},
                    {message: 'Yo!'},
                    {message: 'Hello Bro!'}

                ],
                userData: [
                    {id: '1', name: 'Siniy'},
                    {id: '2', name: 'Master'},
                    {id: '3', name: 'Volodya'},
                    {id: '4', name: 'Stas'}
                ]
            }

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
            if(action.type === "ADD-POST"){
                let newPost = {
                    message: this._state.profilePage.newPostText,
                    count: 0
                }
                this._state.profilePage.postsData.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
            }else if(action.type === "UPDATE-POST-CHANGE"){
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
            }
        }

    }




export default store;
window.store = store;