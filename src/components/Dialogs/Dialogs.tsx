import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {dialogsType, messagesType} from '../../index';

type dialogsComponentType = {
    dialogs: dialogsType[]
    messages: messagesType[]
}


export const Dialogs = (props: dialogsComponentType) => {
    
    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}