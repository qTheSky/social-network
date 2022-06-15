import {combineReducers, createStore} from 'redux';
import profileReducer, {addPostActionCreator, ProfilePageType, updateNewPostTextActionCreator} from './profile-reducer';
import dialogsReducer, {DialogsPageType, sendMessageCreator, updateNewMessageBodyCreator} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

export type ActionsType =
		ReturnType<typeof addPostActionCreator>
		| ReturnType<typeof updateNewPostTextActionCreator>
		| ReturnType<typeof sendMessageCreator>
		| ReturnType<typeof updateNewMessageBodyCreator>

export type StateType = {
		profilePage: ProfilePageType
		dialogsPage: DialogsPageType
		sidebar: Object
}
export type StoreReduxType = {
		getState: () => StateType
		subscribe: (observer: () => void) => void
		dispatch: (action: ActionsType) => void
}

const rootReducer = combineReducers({
		profilePage: profileReducer,
		dialogsPage: dialogsReducer,
		sidebar: sidebarReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)