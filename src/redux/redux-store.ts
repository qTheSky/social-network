import {combineReducers, createStore} from 'redux';
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from './profile-reducer';
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer, {
		follow,
		setCurrentPage,
		setUsers,
		setTotalUsersCount,
		toggleIsFetching,
		unfollow
} from './users-reducer';

export type ActionsType =
		ReturnType<typeof addPostActionCreator>
		| ReturnType<typeof updateNewPostTextActionCreator>
		| ReturnType<typeof sendMessageCreator>
		| ReturnType<typeof updateNewMessageBodyCreator>
		| ReturnType<typeof follow>
		| ReturnType<typeof unfollow>
		| ReturnType<typeof setUsers>
		| ReturnType<typeof setCurrentPage>
		| ReturnType<typeof setTotalUsersCount>
		| ReturnType<typeof toggleIsFetching>

const rootReducer = combineReducers({
		profilePage: profileReducer,
		dialogsPage: dialogsReducer,
		sidebar: sidebarReducer,
		usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)