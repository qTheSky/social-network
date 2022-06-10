import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import {StoreReduxType} from '../../redux/redux-store';
import {Dialogs} from './Dialogs';

type DialogsContainerType = {
		store: StoreReduxType
}


export const DialogsContainer = (props: DialogsContainerType) => {

		const state = props.store.getState().dialogsPage


		const onSendMessageClick = () => {
				props.store.dispatch(sendMessageCreator())
		}

		const onNewMessageChange = (body: string) => {
				props.store.dispatch(updateNewMessageBodyCreator(body))
		}

		return <Dialogs updateNewMessageBody={onNewMessageChange}
		                sendMessage={onSendMessageClick}
		                dialogsPage={state}
		/>
}