import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import {StoreReduxType} from '../../redux/redux-store';
import {Dialogs} from './Dialogs';
import StoreContext from '../../StoreContext';

type DialogsContainerPropsType = {}


export const DialogsContainer = (props: DialogsContainerPropsType) => {

		return <StoreContext.Consumer>
				{(store: StoreReduxType) => {
						const state = store.getState().dialogsPage

						const onSendMessageClick = () => {
								store.dispatch(sendMessageCreator())
						}

						const onNewMessageChange = (body: string) => {
								store.dispatch(updateNewMessageBodyCreator(body))
						}
						return <Dialogs updateNewMessageBody={onNewMessageChange}
						                sendMessage={onSendMessageClick}
						                dialogsPage={state}/>
				}}
		</StoreContext.Consumer>
}