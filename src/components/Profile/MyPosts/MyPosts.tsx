import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {postType} from '../../../redux/state';

type myPostProps = {
		posts: postType[]
		newPostText: string
		dispatch: any
}

const MyPosts = (props: myPostProps) => {

		let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

		let postMessageRef = React.createRef<HTMLTextAreaElement>()

		const addPost = () => {
				props.dispatch({type: 'ADD-POST'})
		}
		const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
				const text = e.currentTarget.value
				let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
				props.dispatch(action)
		}

		return (
				<div className={s.postsBlock}>
						<h3>My posts</h3>
						<div>
								<div>
                    <textarea
		                    onChange={onPostChange}
		                    ref={postMessageRef}
		                    value={props.newPostText}
                    />
								</div>
								<div>
										<button onClick={addPost}>
												add post
										</button>
								</div>
						</div>
						<div className={s.posts}>
								{postsElements}
						</div>
				</div>
		)

}
export default MyPosts;