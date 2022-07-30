import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {AddMessageFormRedux} from './AddMessageForm';


export const Dialogs = (props: DialogsPropsType) => {

		const state = props.dialogsPage

		const dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
		const messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

		const addNewMessage = (values: any) => {
				props.sendMessage(values.newMessageBody)
		}

		return (
				<div className={s.dialogs}>
						<div className={s.dialogsItems}>
								{dialogsElements}
						</div>
						<div className={s.messages}>
								<div>{messagesElements}</div>
								<AddMessageFormRedux onSubmit={addNewMessage}/>
						</div>
				</div>
		)
}

