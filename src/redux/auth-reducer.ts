import {ActionsType, AppThunk} from './redux-store';
import {authAPI} from '../api/api';
import {Dispatch} from 'redux';

type SetAuthUserDataType = {
		type: 'SET-USER-DATA'
		payload: AuthType
}

type AuthType = {
		userId: number | null
		email: string | null
		login: string | null
		isAuth: boolean

}

const initialState: AuthType = {
		userId: null,
		email: null,
		login: null,
		isAuth: false
}

const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {

		switch (action.type) {
				case 'SET-USER-DATA':
						return {
								...state,
								...action.payload,
						}
				default:
						return state
		}

}

export const setAuthUserData = (userId: any, email: any, login: any, isAuth: boolean): SetAuthUserDataType => {
		return {type: 'SET-USER-DATA', payload: {userId, email, login, isAuth}} as const
}

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

export default authReducer