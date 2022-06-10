import {combineReducers, createStore} from 'redux';
import profileReducer, {addPostActionCreator, profilePageType, updateNewPostTextActionCreator} from './profile-reducer';
import dialogsReducer, {dialogsPageType, sendMessageCreator, updateNewMessageBodyCreator} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

export type ActionsType =
		ReturnType<typeof addPostActionCreator>
		| ReturnType<typeof updateNewPostTextActionCreator>
		| ReturnType<typeof sendMessageCreator>
		| ReturnType<typeof updateNewMessageBodyCreator>

export type StateType = {
		profilePage: profilePageType
		dialogsPage: dialogsPageType
		sidebar: Object
}
export type StoreReduxType = {
		getState: () => StateType
		subscribe: (observer: () => void) => void
		dispatch: (action: ActionsType) => void
}

const reducers = combineReducers({
		profilePage: profileReducer,
		dialogsPage: dialogsReducer,
		sidebar: sidebarReducer,
})

export const store = createStore(reducers)