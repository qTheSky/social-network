import React, {ChangeEvent} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {StoreReduxType} from '../../../redux/redux-store';
import StoreContext from '../../../StoreContext';


type myPostsContainerProps = {}

export const MyPostsContainer = (props: myPostsContainerProps) => {

		return (
				<StoreContext.Consumer>{
						(store: StoreReduxType) => {
								const state = store.getState()
								const addPost = () => {
										store.dispatch(addPostActionCreator())
								}
								const onPostChange = (text: string) => {
										store.dispatch(updateNewPostTextActionCreator(text))
								}
								return <MyPosts posts={store.getState().profilePage.posts}
								                newPostText={store.getState().profilePage.newPostText}
								                updateNewPostText={onPostChange}
								                addPost={addPost}/>
						}
				}
				</StoreContext.Consumer>
		)
}