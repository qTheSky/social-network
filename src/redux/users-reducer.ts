import {ActionsType} from './redux-store';


export type UserType = {
		id: number
		photos: {
				large: string
				small: string
		}
		followed: boolean
		name: string
		status: string
		uniqueUrlName: string
}

export type UsersPageType = {
		users: UserType[]
}

const initialState: UsersPageType = {
		users: []
}

const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {

		switch (action.type) {
				case 'FOLLOW':
						return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)]}
				case 'UNFOLLOW':
						return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)]}
				case 'SET-USERS':
						return {...state, users: [...state.users, ...action.users]}
				default:
						return state
		}

}
export const followAC = (userId: number) => {
		return {type: 'FOLLOW', userId} as const
}
export const unfollowAC = (userId: number) => {
		return {type: 'UNFOLLOW', userId} as const
}
export const setUsersAC = (users: UserType[]) => {
		return {type: 'SET-USERS', users} as const
}
export default usersReducer