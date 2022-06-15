import {ActionsType} from './redux-store';


export type ProfilePageType = {
		posts: PostType[]
		newPostText: string
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
		newPostText: 'newpost'
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {

		switch (action.type) {
				case 'ADD-POST':
						const newPost = {
								id: new Date().getTime(),
								message: state.newPostText,
								likesCount: 0
						}
						state.posts.push(newPost)
						state.newPostText = ''
						return state
				case 'UPDATE-NEW-POST-TEXT':
						return {...state, newPostText: action.newText}
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