import {ActionsType} from './redux-store';
import {Dispatch} from 'redux';
import {authAPI} from '../api/api';


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
								...action.data,
								isAuth: true,
						}
				default:
						return state
		}

}

export const setAuthUserData = (userId: any, email: any, login: any) => {
		return {type: 'SET-USER-DATA', data: {userId, email, login}} as const
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
		authAPI.me()
				.then(response => {
						if (response.data.resultCode === 0) {
								const {id, login, email} = response.data.data
								dispatch(setAuthUserData(id, email, login))
						}
				})
}

export default authReducer