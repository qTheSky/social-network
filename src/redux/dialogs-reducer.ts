import {ActionsType, dialogsPageType} from './state';

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW_MESSAGE_BODY'

const dialogsReducer = (state: dialogsPageType, action: ActionsType) => {

		switch (action.type) {
				case UPDATE_NEW_MESSAGE_BODY:
						state.newMessageBody = action.body
						return state
				case SEND_MESSAGE:
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