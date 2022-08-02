import {AppThunk} from './redux-store';
import {authAPI} from '../api/api';
import {Dispatch} from 'redux';
import {stopSubmit} from 'redux-form';


const initialState: AuthType = {
		userId: null,
		email: null,
		login: null,
		isAuth: false
}

export const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {
		switch (action.type) {
				case 'SET-USER-DATA':
						return {...state, ...action.payload,}
				default:
						return state
		}

}
//actions
export const setAuthUserData = (userId: any, email: any, login: any, isAuth: boolean) =>
		({type: 'SET-USER-DATA', payload: {userId, email, login, isAuth}} as const)


//thunks
export const getAuthUserData = () => (dispatch: Dispatch) => {
		authAPI.me()
				.then(response => {
						if (response.data.resultCode === 0) {
								const {id, login, email} = response.data.data
								dispatch(setAuthUserData(id, email, login, true))
						}
				})
}
export const login = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
		authAPI.login(email, password, rememberMe)
				.then(response => {
						if (response.data.resultCode === 0) {
								dispatch(getAuthUserData())
						} else {
								const message = response.data.messages.length > 0
										? response.data.messages[0]
										: 'Some error'
								dispatch(stopSubmit('login', {_error: message}))
						}
				})
}
export const logout = () => (dispatch: Dispatch) => {
		authAPI.logout()
				.then(response => {
						if (response.data.resultCode === 0) {
								dispatch(setAuthUserData(null, null, null, false))
						}
				})
}


//types
type ActionsType =
		| ReturnType<typeof setAuthUserData>

type AuthType = {
		userId: number | null
		email: string | null
		login: string | null
		isAuth: boolean
}
