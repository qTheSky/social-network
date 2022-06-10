import {store, StoreReduxType} from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


const rerenderEntireTree = () => {
		ReactDOM.render(
				<BrowserRouter>
						<App store={store}/>
				</BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree()

store.subscribe(() => {
		rerenderEntireTree()
})