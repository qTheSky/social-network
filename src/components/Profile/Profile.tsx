import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {postType} from '../../redux/state';


type profileType = {
    profilePage: {
        posts: postType[]
        newPostText: string
    }
    addPost: ()=>void
    updateNewPostText: (newText: string) => void
}

const Profile = (props: profileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}
            />
        </div>
    )
}
export default Profile;