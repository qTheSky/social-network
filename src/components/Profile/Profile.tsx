import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {postType} from '../../index';


type profileType = {
    posts: postType[]
}

const Profile = (props: profileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}
export default Profile;