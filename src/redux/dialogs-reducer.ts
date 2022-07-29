import {ActionsType} from './redux-store';

type SendMessageType = {
		type: 'SEND-MESSAGE'
		newMessageBody: string
}

export type DialogsPageType = {
		dialogs: DialogsType[]
		messages: messagesType[]
}
export type DialogsType = {
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
		]
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {

		switch (action.type) {
				case 'SEND-MESSAGE':
						const newMessage = {
								id: new Date().getTime(),
								message: action.newMessageBody
						}
						return {...state, messages: [...state.messages, newMessage]}
				default:
						return state
		}
}
export const sendMessage = (newMessageBody: string): SendMessageType => {
		return {type: 'SEND-MESSAGE', newMessageBody} as const
}
