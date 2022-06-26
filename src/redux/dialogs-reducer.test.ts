import dialogsReducer, {DialogsPageType, sendMessageCreator, updateNewMessageBodyCreator} from './dialogs-reducer';

test('new message should be send',()=>{
		const initialState: DialogsPageType = {
				dialogs: [
						{id: 1, name: 'Dimych'},
				],
				messages: [
						{id: 1, message: 'Hi'},

				],
				newMessageBody: 'newmessage'
		}
		const action = sendMessageCreator()
		const endState = dialogsReducer(initialState,action)

		expect(endState.messages[1].message).toBe('newmessage')
})
test('new messageBody should be updated',()=>{
		const initialState: DialogsPageType = {
				dialogs: [
						{id: 1, name: 'Dimych'},
				],
				messages: [
						{id: 1, message: 'Hi'},

				],
				newMessageBody: ''
		}
		const action = updateNewMessageBodyCreator('blabla')
		const endState = dialogsReducer(initialState,action)

		expect(endState.newMessageBody).toBe('blabla')
})