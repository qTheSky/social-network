import {combineReducers, createStore} from 'redux';
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from './profile-reducer';
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

export type ActionsType =
		ReturnType<typeof addPostActionCreator>
		| ReturnType<typeof updateNewPostTextActionCreator>
		| ReturnType<typeof sendMessageCreator>
		| ReturnType<typeof updateNewMessageBodyCreator>

const rootReducer = combineReducers({
		profilePage: profileReducer,
		dialogsPage: dialogsReducer,
		sidebar: sidebarReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)