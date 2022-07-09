import {ActionsType} from './redux-store';


type AuthType = {
		userId: number|null
		email: string|null
		login: string|null
		isAuth:boolean

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

export default authReducer