import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {PostType} from '../../../redux/profile-reducer';


type myPostProps = {
		posts: PostType[]
		newPostText: string
		updateNewPostText: (text: string) => void
		addPost: () => void
}

const MyPosts = (props: myPostProps) => {

		const postsElements =
				props.posts.map(p => <Post key={p.id}
				                           message={p.message}
				                           likesCount={p.likesCount}/>)

		const postMessageRef = React.createRef<HTMLTextAreaElement>()

		const onAddPost = () => {
				props.addPost()
		}
		const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
				const text = e.currentTarget.value
				props.updateNewPostText(text)
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
										<button onClick={onAddPost}>
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