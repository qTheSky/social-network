import {ActionsType} from './redux-store';


const initialState: any = {
		userId: null,
		email: null,
		login: null,
		isAuth: false
}

const authReducer = (state: any = initialState, action: ActionsType): any => {

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