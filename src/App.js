import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Post from "./components/Profile/MyPosts/Post/Post";




const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div class='app-wrapper-content'>
                    <Route path='/profile' render={ () => <Profile postsData={props.postsData}/>}/>
                    <Route path='/message' render={ () => <Dialogs userData={props.userData} messageData={props.messageData}/>}/>
                    <Route path='/settings' render={ () => <Settings />}/>
                    <Route path='/news' render={ () => <News />}/>
                    <Route path='/music' render={ () => <Music />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
