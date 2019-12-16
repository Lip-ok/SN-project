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


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div class='app-wrapper-content'>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/message' component={Dialogs}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
