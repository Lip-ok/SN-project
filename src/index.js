import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    {message: 'Hello bro!', count: 3},
    {message: 'Yo', count: 14},
    {message: 'WTF!?', count: 41}
];
let userData = [
    {id:'1', name:'Siniy' },
    {id:'2', name:'Master' },
    {id:'3', name:'Volodya' },
    {id:'4', name:'Stas' }
];
let messageData =[
    {message: 'Hi!'},
    {message: 'Hi!'},
    {message: 'Yo!'},
    {message: 'Hello Bro!'}

];

ReactDOM.render(<App postsData={postsData} messageData={messageData} userData={userData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
