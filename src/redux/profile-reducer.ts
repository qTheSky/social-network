import {ActionsType, profilePageType} from './state';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state: profilePageType, action: ActionsType) => {

		switch (action.type) {
				case ADD_POST:
						const newPost = {
								id: new Date().getTime(),
								message: state.newPostText,
								likesCount: 0
						}
						state.posts.push(newPost)
						state.newPostText = ''
						return state
				case UPDATE_NEW_POST_TEXT:
						state.newPostText = action.newText
						return state
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
export default profileReducer