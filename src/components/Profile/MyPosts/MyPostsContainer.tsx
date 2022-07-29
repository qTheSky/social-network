import React from 'react';
import {addPostActionCreator, PostType} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';


type mapStateToProps = {
		posts: PostType[],
}

type mapDispatchToProps = {
		addPost: (newPost: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToProps => {
		return {
				posts: state.profilePage.posts,
		}
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
		return {
				addPost: (newPost:string) => {
						dispatch(addPostActionCreator(newPost))
				},
		}
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)