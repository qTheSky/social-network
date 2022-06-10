import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {dialogsPageType} from '../../redux/dialogs-reducer';

type dialogsComponentType = {
		updateNewMessageBody:(body: string)=> void
		sendMessage: ()=> void
		dialogsPage: dialogsPageType
}


export const Dialogs = (props: dialogsComponentType) => {

		const state = props.dialogsPage

		const dialogsMessageRef = React.createRef<HTMLTextAreaElement>()

		const dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
		const messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)


		const onSendMessageClick = () => {
				props.sendMessage()
		}

		const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
				const body = e.target.value
				props.updateNewMessageBody(body)
		}
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