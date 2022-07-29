import {ActionsType} from './redux-store';
import {Dispatch} from 'redux';
import {profileAPI, usersAPI} from '../api/api';


type AddPostType = {
		type: 'ADD-POST'
		newPost: string
}
type SetUserProfileType = {
		type: 'SET-USER-PROFILE'
		profile: ProfileType
}
type SetStatusType = {
		type: 'SET-STATUS'
		status: string
}

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
				case 'ADD-POST':
						const newPost = {
								id: new Date().getTime(),
								message: action.newPost,
								likesCount: 0
						}
						return {...state, posts: [newPost, ...state.posts], newPostText: ''}
				case 'SET-USER-PROFILE':
						return {...state, profile: action.profile}
				case 'SET-STATUS':
						return {...state, status: action.status}
				default:
						return state
		}

}
export const addPostActionCreator = (newPost: string): AddPostType => {
		return {type: 'ADD-POST', newPost} as const
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => {
		return {type: 'SET-USER-PROFILE', profile} as const
}
export const setStatus = (status: string): SetStatusType => {
		return {type: 'SET-STATUS', status} as const
}


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