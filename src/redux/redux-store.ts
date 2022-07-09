import {combineReducers, createStore} from 'redux';
import profileReducer, {addPostActionCreator, setUserProfile, updateNewPostTextActionCreator} from './profile-reducer';
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
import authReducer, {setAuthUserData} from './auth-reducer';

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
		| ReturnType<typeof setUserProfile>
		| ReturnType<typeof setAuthUserData>

const rootReducer = combineReducers({
		profilePage: profileReducer,
		dialogsPage: dialogsReducer,
		sidebar: sidebarReducer,
		usersPage: usersReducer,
		auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store