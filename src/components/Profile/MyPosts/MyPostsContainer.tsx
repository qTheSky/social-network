import React, {ChangeEvent} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {StoreReduxType} from '../../../redux/redux-store';


type myPostsContainerProps = {
		store: StoreReduxType
}

export const MyPostsContainer = (props: myPostsContainerProps) => {
		const state = props.store.getState()

		const addPost = () => {
				props.store.dispatch(addPostActionCreator())
		}
		const onPostChange = (text: string) => {
				props.store.dispatch(updateNewPostTextActionCreator(text))
		}

		return <MyPosts posts={state.profilePage.posts}
		                newPostText={state.profilePage.newPostText}
		                updateNewPostText={onPostChange}
		                addPost={addPost}/>
}