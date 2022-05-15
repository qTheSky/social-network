export type postType = {
    id: number
    message: string
    likesCount: number
}
export type dialogsType = {
    id: number
    name: string
}
export type messagesType = {
    id: number
    message: string
}

const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi,how are you', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'blabla', likesCount: 11},
            {id: 4, message: 'dada', likesCount: 11},
        ],
    },
    dialogsPage:{
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ],
    },
}


export const addPost = (postMessage: string)=>{
    const newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost)
}

export default state