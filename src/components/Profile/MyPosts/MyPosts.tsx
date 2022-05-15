import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {postType} from '../../../redux/state';

export type myPostProps = {
    posts: postType[]
}

const MyPosts = (props: myPostProps) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostEl = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if (newPostEl.current !== null) {
            alert(newPostEl.current.value)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostEl}></textarea>
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