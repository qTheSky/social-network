import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


const mapStateToProps = (state: any) => {
		return {
				posts: state.profilePage.posts,
				newPostText: state.profilePage.newPostText,
		}
}
const mapDispatchToProps = (dispatch: any) => {
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