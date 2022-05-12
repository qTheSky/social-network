import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts: postType[] = [
    {id: 1, message: 'Hi,how are you', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 3, message: 'blabla', likesCount: 11},
    {id: 4, message: 'dada', likesCount: 11},
]

export type postType = {
    id: number
    message: string
    likesCount: number
}

let dialogs: dialogsType[] = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
]

export type dialogsType = {
    id: number
    name: string
}

let messages: messagesType[] = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
]

export type messagesType = {
    id: number
    message: string
}

ReactDOM.render(
    <App
        posts={posts}
        dialogs={dialogs}
        messages={messages}
    />,
    document.getElementById('root')
);