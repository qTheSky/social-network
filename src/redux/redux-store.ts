import {combineReducers, createStore} from 'redux';
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from './profile-reducer';
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer, {
		followAC,
		setCurrentPageAC,
		setUsersAC,
		setUsersTotalCountAC,
		toggleIsFetchingAC,
		unfollowAC
} from './users-reducer';

export type ActionsType =
		ReturnType<typeof addPostActionCreator>
		| ReturnType<typeof updateNewPostTextActionCreator>
		| ReturnType<typeof sendMessageCreator>
		| ReturnType<typeof updateNewMessageBodyCreator>
		| ReturnType<typeof followAC>
		| ReturnType<typeof unfollowAC>
		| ReturnType<typeof setUsersAC>
		| ReturnType<typeof setCurrentPageAC>
		| ReturnType<typeof setUsersTotalCountAC>
		| ReturnType<typeof toggleIsFetchingAC>

const rootReducer = combineReducers({
		profilePage: profileReducer,
		dialogsPage: dialogsReducer,
		sidebar: sidebarReducer,
		usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)