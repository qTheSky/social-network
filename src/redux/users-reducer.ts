import {ActionsType} from './redux-store';
import {Dispatch} from 'redux';
import {usersAPI} from '../api/api';


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
		followingInProgress: any
}

const initialState: UsersPageType = {
		users: [],
		pageSize: 100,
		totalUsersCount: 0,
		currentPage: 1,
		isFetchig: false,
		followingInProgress: [],
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
				case 'TOGGLE-IS-FOLLOWING-PROGRESS':
						return {
								...state, followingInProgress: action.isFetching
										? [...state.followingInProgress, action.userId]
										: state.followingInProgress.filter((id: number) => id !== action.userId)
						}
				default:
						return state
		}

}
export const followSuccess = (userId: number) => {
		return {type: 'FOLLOW', userId} as const
}
export const unfollowSuccess = (userId: number) => {
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
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
		return {type: 'TOGGLE-IS-FOLLOWING-PROGRESS', isFetching,userId} as const
}

export const getUsers = (currentPage: number,pageSize: number)=>{
		return (dispatch: Dispatch)=>{
		dispatch(toggleIsFetching(true))

		usersAPI.getUsers(currentPage,pageSize).then(data => {
				dispatch(toggleIsFetching(false))
				dispatch(setUsers(data.items))
				dispatch(setTotalUsersCount(data.totalCount))
		})
}}
export const follow = (userId:number)=>{
		return (dispatch: Dispatch)=>{
				dispatch(toggleFollowingProgress(true, userId))
				usersAPI.follow(userId)
						.then(response => {
								if (response.data.resultCode === 0) {
										dispatch(followSuccess(userId))
								}
								dispatch(toggleFollowingProgress(false, userId))
						})
}}
export const unfollow = (userId:number)=>{
		return (dispatch: Dispatch)=>{
				dispatch(toggleFollowingProgress(true, userId))
				usersAPI.unfollow(userId)
						.then(response => {
								if (response.data.resultCode === 0) {
										dispatch(unfollowSuccess(userId))
								}
								dispatch(toggleFollowingProgress(false, userId))
						})
}}
export default usersReducer