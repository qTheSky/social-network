import {ActionsType} from './redux-store';

export type DialogsPageType = {
		dialogs: dialogsType[]
		messages: messagesType[]
		newMessageBody: string
}
export type dialogsType = {
		id: number
		name: string
}
export type messagesType = {
		id: number
		message: string
}

const initialState: DialogsPageType = {
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
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {

		switch (action.type) {
				case 'UPDATE-NEW_MESSAGE_BODY':
						state.newMessageBody = action.body
						return state
				case 'SEND-MESSAGE':
						const newMessage = {
								id: new Date().getTime(),
								message: state.newMessageBody
						}
						state.messages.push(newMessage)
						state.newMessageBody = ''
						return state
				default:
						return state
		}
}
export const sendMessageCreator = () => {
		return {type: 'SEND-MESSAGE'} as const
}
export const updateNewMessageBodyCreator = (text: string) => {
		return {type: 'UPDATE-NEW_MESSAGE_BODY', body: text} as const
}
export default dialogsReducer