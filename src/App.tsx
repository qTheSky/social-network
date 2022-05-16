import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {stateType, updateNewPostText} from './redux/state';


type appType = {
    state: stateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}


const App = (props: appType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <Dialogs state={props.state.dialogsPage}/>}/>

                    <Route path="/profile"
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               addPost={props.addPost}
                               updateNewPostText={props.updateNewPostText}
                           />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;