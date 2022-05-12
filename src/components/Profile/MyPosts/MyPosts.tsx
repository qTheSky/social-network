import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'


type myPostProps = {
    posts: postType[]
}
type postType = {
    id: number
    message: string
    likesCount: number
}
const MyPosts = (props: myPostProps) => {


    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}
export default MyPosts;