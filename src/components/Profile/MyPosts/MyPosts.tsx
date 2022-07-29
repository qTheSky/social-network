import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {PostType} from '../../../redux/profile-reducer';
import {Field, reduxForm} from 'redux-form';


type myPostProps = {
		posts: PostType[]
		addPost: (newPost: string) => void
}


export const MyPosts = (props: myPostProps) => {

		const postsElements =
				props.posts.map(p => <Post key={p.id}
				                           message={p.message}
				                           likesCount={p.likesCount}/>)

		const onAddPost = (values: any) => {
				props.addPost(values.newPostText)
		}


		return (
				<div className={s.postsBlock}>
						<h3>My posts</h3>
						<div>
								<AddNewPostForm onSubmit={onAddPost}/>
						</div>
						<div className={s.posts}>
								{postsElements}
						</div>
				</div>
		)
}


export const PostsForm = (props: any) => {
		return (
				<form onSubmit={props.handleSubmit}>
						<div>
								<Field placeholder={'new post'}
								       name={'newPostText'}
								       component={'textarea'}
								/>
						</div>
						<div>
								<button>add post</button>
						</div>
				</form>
		)
}

type FormDataType = {
		newPostText: string
}

const AddNewPostForm = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(PostsForm)