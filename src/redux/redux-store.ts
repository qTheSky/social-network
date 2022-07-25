import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer, {
		addPostActionCreator,
		setStatus,
		setUserProfile,
		updateNewPostTextActionCreator
} from './profile-reducer';
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer, {
		setCurrentPage,
		setUsers,
		setTotalUsersCount,
		toggleIsFetching,
		followSuccess, toggleFollowingProgress, unfollowSuccess
} from './users-reducer';
import authReducer, {setAuthUserData} from './auth-reducer';
import thunkMiddleWare from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';

export type ActionsType =
		ReturnType<typeof addPostActionCreator>
		| ReturnType<typeof updateNewPostTextActionCreator>
		| ReturnType<typeof sendMessageCreator>
		| ReturnType<typeof updateNewMessageBodyCreator>
		| ReturnType<typeof followSuccess>
		| ReturnType<typeof unfollowSuccess>
		| ReturnType<typeof setUsers>
		| ReturnType<typeof setCurrentPage>
		| ReturnType<typeof setTotalUsersCount>
		| ReturnType<typeof toggleIsFetching>
		| ReturnType<typeof setUserProfile>
		| ReturnType<typeof setAuthUserData>
		| ReturnType<typeof toggleFollowingProgress>
		| ReturnType<typeof setStatus>

const rootReducer = combineReducers({
		profilePage: profileReducer,
		dialogsPage: dialogsReducer,
		sidebar: sidebarReducer,
		usersPage: usersReducer,
		auth: authReducer,
		form: formReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))

// @ts-ignore
window.store = store