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
		isFetchig: boolean
}

const initialState: UsersPageType = {
		users: [],
		pageSize: 100,
		totalUsersCount: 0,
		currentPage: 1,
		isFetchig: false,
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
				case 'TOGGLE-IS-FETCHING':
						return {...state, isFetchig: action.isFetching}
				default:
						return state
		}

}
export const follow = (userId: number) => {
		return {type: 'FOLLOW', userId} as const
}
export const unfollow = (userId: number) => {
		return {type: 'UNFOLLOW', userId} as const
}
export const setUsers = (users: UserType[]) => {
		return {type: 'SET-USERS', users} as const
}
export const setCurrentPage = (currentPage: number) => {
		return {type: 'SET-CURRENT-PAGE', currentPage} as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
		return {type: 'SET-TOTAL-USERS-COUNT', count: totalUsersCount} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
		return {type: 'TOGGLE-IS-FETCHING', isFetching} as const
}

export default usersReducer