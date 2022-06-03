export type postType = {
		id: number
		message: string
		likesCount: number
}
export type dialogsType = {
		id: number
		name: string
}
export type messagesType = {
		id: number
		message: string
}
export type stateType = {
		profilePage: {
				posts: postType[]
				newPostText: string
		}
		dialogsPage: {
				dialogs: dialogsType[]
				messages: messagesType[]
				newMessageBody: string
		}
}
export type StoreType = {
		_state: stateType
		getState: () => stateType
		_callSubscriber: () => void
		subscribe: (observer: () => void) => void
		dispatch: (action: ActionsType) => void
}
export type ActionsType =
		ReturnType<typeof addPostActionCreator>
		| ReturnType<typeof updateNewPostTextActionCreator>
		| ReturnType<typeof sendMessageCreator>
		| ReturnType<typeof updateNewMessageBodyCreator>
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW_MESSAGE_BODY'


export const store: StoreType = {
		_state: {
				profilePage: {
						posts: [
								{id: 1, message: 'Hi,how are you', likesCount: 12},
								{id: 2, message: 'It\'s my first post', likesCount: 11},
								{id: 3, message: 'blabla', likesCount: 11},
								{id: 4, message: 'dada', likesCount: 11},
						],
						newPostText: 'newpost'
				},
				dialogsPage: {
						dialogs: [
								{id: 1, name: 'Dimych'},
								{id: 2, name: 'Andrew'},
								{id: 3, name: 'Sveta'},
								{id: 4, name: 'Sasha'},
								{id: 5, name: 'Viktor'},
								{id: 6, name: 'Valera'},
						],
						messages: [
								{id: 1, message: 'Hi'},
								{id: 2, message: 'How are you'},
								{id: 3, message: 'Yo'},
								{id: 4, message: 'Yo'},
								{id: 5, message: 'Yo'},
						],
						newMessageBody: 'newmessage'
				},
		},
		_callSubscriber() {
				console.log('State changed')
		},
		getState() {
				return this._state
		},
		subscribe(observer) {
				this._callSubscriber = observer; //наблюдатель observer - pattern
		},

		dispatch(action) {
				if (action.type === ADD_POST) {
						const newPost = {
								id: new Date().getTime(),
								message: this._state.profilePage.newPostText,
								likesCount: 0
						}
						this._state.profilePage.posts.push(newPost)
						this._state.profilePage.newPostText = ''
						this._callSubscriber()
				} else if (action.type === UPDATE_NEW_POST_TEXT) {
						this._state.profilePage.newPostText = action.newText
						this._callSubscriber()
				} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
						this._state.dialogsPage.newMessageBody = action.body
						this._callSubscriber()
				} else if (action.type === SEND_MESSAGE) {
						const newMessage = {
								id: new Date().getTime(),
								message: this._state.dialogsPage.newMessageBody
						}
						this._state.dialogsPage.messages.push(newMessage)
						this._state.dialogsPage.newMessageBody = ''
						this._callSubscriber()
				}
		},
}

export const addPostActionCreator = () => {
		return {type: 'ADD-POST'} as const
}
export const updateNewPostTextActionCreator = (text: string) => {
		return {type: 'UPDATE-NEW-POST-TEXT', newText: text} as const
}
export const sendMessageCreator = () => {
		return {type: 'SEND-MESSAGE'} as const
}
export const updateNewMessageBodyCreator = (text: string) => {
		return {type: 'UPDATE-NEW_MESSAGE_BODY', body: text} as const
}
