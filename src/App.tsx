import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {ActionsType, stateType, StoreType} from './redux/state';


type appType = {
		state: stateType
		dispatch: (action: ActionsType) => void
		store: StoreType
}


const App = (props: appType) => {
		return (
				<div className="app-wrapper">
						<Header/>
						<Navbar/>
						<div className="app-wrapper-content">
								<Route path="/dialogs"
								       render={() => <Dialogs store={props.store}/>}/>

								<Route path="/profile"
								       render={() => <Profile
										       profilePage={props.state.profilePage}
										       dispatch={props.dispatch}
								       />}/>
						</div>
				</div>
		);
}

export default App;