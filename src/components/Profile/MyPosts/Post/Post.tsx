import React from 'react';
import s from './Post.module.css';


type PostPropsType = {
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {

    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94afZQIGT9vTsfYlodOh_jsmujU4YBDCU8Q&usqp=CAU"/>
                {props.message}
                <div>
                    <span>like </span> {props.likesCount}
                </div>
            </div>
        </div>
    )

}
export default Post;