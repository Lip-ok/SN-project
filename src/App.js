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
import Friend from "./components/Navbar/Friends/Friends";



const App = (props) => {

    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div class='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path='/message' render={() => <Dialogs state={props.state.dialogPage}/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <route path='/friends' render={() => <Friend/>} />
                </div>
            </div>

    )
}


export default App;
