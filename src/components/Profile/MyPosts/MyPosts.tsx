import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {postType} from '../../../redux/state';

type myPostProps = {
    posts: postType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: myPostProps) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost()
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
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