import React from 'react';
import s from './../Dialogs.module.css';

type MessageProps = {
    message: string
    id: number
}

export const Message = (props: MessageProps) => {
    return <div className={s.dialog}>{props.message}</div>
}

