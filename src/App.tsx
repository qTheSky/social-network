import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import {SuperDialogsContainer} from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


type appType = {}


const App = (props: appType) => {
		return (
				<div className="app-wrapper">
						<Header/>
						<Navbar/>
						<div className="app-wrapper-content">
								<Route path="/dialogs"
								       render={() => <SuperDialogsContainer/>}/>

								<Route path="/profile/:userId?"
								       render={() => <ProfileContainer/>}/>
								<Route path="/users"
								       render={() => <UsersContainer/>}/>
						</div>
				</div>
		);
}

export default App;