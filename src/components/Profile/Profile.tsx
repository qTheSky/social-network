import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';


type ProfilePropsType = {
		profile: ProfileType
		updateStatus: (status: string) => void
		status: string
}

const Profile = (props: ProfilePropsType) => {
		return (
				<div>
						<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
						<MyPostsContainer/>
				</div>
		)
}
export default Profile;