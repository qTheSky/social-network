import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {postType} from '../../redux/state';


type profileType = {
    state: {
        posts: postType[]
    }
    addPost: (postMessage:string)=>void
}

const Profile = (props: profileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    )
}
export default Profile;