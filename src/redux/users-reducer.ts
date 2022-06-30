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
		pageSize: number
		totalUsersCount: number
		currentPage: number
}

const initialState: UsersPageType = {
		users: [],
		pageSize: 5,
		totalUsersCount: 0,
		currentPage: 2,
}

const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {

		switch (action.type) {
				case 'FOLLOW':
						return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)]}
				case 'UNFOLLOW':
						return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)]}
				case 'SET-USERS':
						return {...state, users: action.users}
				case 'SET-CURRENT-PAGE':
						return {...state, currentPage: action.currentPage}
				case 'SET-TOTAL-USERS-COUNT':
						return {...state, totalUsersCount: action.count}
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
export const setCurrentPageAC = (currentPage: number) => {
		return {type: 'SET-CURRENT-PAGE', currentPage} as const
}
export const setUsersTotalCountAC = (totalUsersCount: number) => {
		return {type: 'SET-TOTAL-USERS-COUNT', count: totalUsersCount} as const
}

export default usersReducer