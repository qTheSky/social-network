import React from 'react';
import {addPostActionCreator, PostType, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';


type mapStateToProps = {
		posts: PostType[],
		newPostText: string,
}

type mapDispatchToProps = {
		addPost: () => void
		updateNewPostText: (text: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToProps => {
		return {
				posts: state.profilePage.posts,
				newPostText: state.profilePage.newPostText,
		}
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
		return {
				addPost: () => {
						dispatch(addPostActionCreator())
				},
				updateNewPostText: (text: string) => {
						dispatch(updateNewPostTextActionCreator(text))
				},
		}
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)