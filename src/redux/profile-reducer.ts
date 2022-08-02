import {Dispatch} from 'redux';
import {profileAPI, usersAPI} from '../api/api';


const initialState: ProfilePageType = {
		posts: [
				{id: 1, message: 'Hi,how are you', likesCount: 12},
				{id: 2, message: 'It\'s my first post', likesCount: 11},
				{id: 3, message: 'blabla', likesCount: 11},
				{id: 4, message: 'dada', likesCount: 11},
		],
		profile: null,
		status: '',
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
		switch (action.type) {
				case 'ADD-POST': {
						const newPost = {
								id: new Date().getTime(),
								message: action.newPost,
								likesCount: 0
						}
						return {...state, posts: [newPost, ...state.posts], newPostText: ''}
				}
				case 'SET-USER-PROFILE':
						return {...state, profile: action.profile}
				case 'SET-STATUS':
						return {...state, status: action.status}
				default:
						return state
		}

}
//actions
export const addPostActionCreator = (newPost: string) =>
		({type: 'ADD-POST', newPost} as const)

export const setUserProfile = (profile: ProfileType) =>
		({type: 'SET-USER-PROFILE', profile} as const)

export const setStatus = (status: string) =>
		({type: 'SET-STATUS', status} as const)


//thunks
export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
		usersAPI.getProfile(userId)
				.then(res => dispatch(setUserProfile(res.data)))
}
export const getStatus = (userId: string) => (dispatch: Dispatch) => {
		profileAPI.getStatus(userId)
				.then(res => dispatch(setStatus(res.data)))
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
		profileAPI.updateStatus(status)
				.then(res => {
						if (res.data.resultCode === 0) {
								dispatch(setStatus(status))
						}
				})
}

//types
type ActionsType =
		| ReturnType<typeof addPostActionCreator>
		| ReturnType<typeof setUserProfile>
		| ReturnType<typeof setStatus>
export type ProfileType = {
		aboutMe?: string
		contacts: {
				facebook?: string
				github?: string
				instagram?: string
				mainLink?: any
				twitter?: string
				vk?: string
				website?: string
				youtube?: string
		}
		fullName?: string
		lookingForAJob?: boolean
		lookingForAjobDescription?: string
		photos: {
				large?: string
				small?: string
		}
		userId: number
} | null
export type ProfilePageType = {
		posts: PostType[]
		profile: ProfileType
		status: string
}
export type PostType = {
		id: number
		message: string
		likesCount: number
}