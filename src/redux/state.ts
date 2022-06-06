import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from './profile-reducer';
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

export type profilePageType = {
		posts: postType[]
		newPostText: string
}
export type dialogsPageType = {
		dialogs: dialogsType[]
		messages: messagesType[]
		newMessageBody: string
}
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
export type StateType = {
		profilePage: profilePageType
		dialogsPage: dialogsPageType
		sidebar: Object
}
export type StoreType = {
		_state: StateType
		getState: () => StateType
		_callSubscriber: () => void
		subscribe: (observer: () => void) => void
		dispatch: (action: ActionsType) => void
}
export type ActionsType =
		ReturnType<typeof addPostActionCreator>
		| ReturnType<typeof updateNewPostTextActionCreator>
		| ReturnType<typeof sendMessageCreator>
		| ReturnType<typeof updateNewMessageBodyCreator>


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
				sidebar: {},
		},
		_callSubscriber() {
				console.log('state changed')
		},
		getState() {
				return this._state
		},
		subscribe(observer) {
				this._callSubscriber = observer; //наблюдатель observer - pattern
		},

		dispatch(action) {

				this._state.profilePage = profileReducer(this._state.profilePage, action)
				this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
				this._state.sidebar = sidebarReducer(this._state.sidebar, action)

				this._callSubscriber()
		},
}