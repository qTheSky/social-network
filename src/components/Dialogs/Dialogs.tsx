import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import {StoreType} from '../../redux/store';

type dialogsComponentType = {
		store: StoreType
}


export const Dialogs = (props: dialogsComponentType) => {

		const state = props.store.getState().dialogsPage

		const onSendMessageClick = () => {
				props.store.dispatch(sendMessageCreator())
		}

		const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
				const text = e.target.value
				props.store.dispatch(updateNewMessageBodyCreator(text))
		}

		const dialogsMessageRef = React.createRef<HTMLTextAreaElement>()

		const dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
		const messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

		return (
				<div className={s.dialogs}>
						<div className={s.dialogsItems}>
								{dialogsElements}
						</div>
						<div className={s.messages}>
								<div>{messagesElements}</div>
								<div>
										<div><textarea onChange={onNewMessageChange}
										               ref={dialogsMessageRef}
										               value={state.newMessageBody}
										               placeholder={'Enter your message'}
										/></div>
										<div>
												<button onClick={onSendMessageClick}>
														Send
												</button>
										</div>
								</div>
						</div>
				</div>
		)
}