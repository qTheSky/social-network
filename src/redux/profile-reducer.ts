import {ActionsType} from './redux-store';
import {Dispatch} from 'redux';
import {profileAPI, usersAPI} from '../api/api';


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
		newPostText: string
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
		newPostText: 'newpost',
		profile: null,
		status: '',
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {

		switch (action.type) {
				case 'ADD-POST':
						const newPost = {
								id: new Date().getTime(),
								message: state.newPostText,
								likesCount: 0
						}
						return {...state, posts: [newPost, ...state.posts], newPostText: ''}
				case 'UPDATE-NEW-POST-TEXT':
						return {...state, newPostText: action.newText}
				case 'SET-USER-PROFILE':
						return {...state, profile: action.profile}
				case 'SET-STATUS':
						return {...state, status: action.status}
				default:
						return state
		}

}
export const addPostActionCreator = () => {
		return {type: 'ADD-POST'} as const
}
export const updateNewPostTextActionCreator = (text: string) => {
		return {type: 'UPDATE-NEW-POST-TEXT', newText: text} as const
}
export const setUserProfile = (profile: ProfileType) => {
		return {type: 'SET-USER-PROFILE', profile} as const
}
export const setStatus = (status: string) => {
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
export default profileReducer