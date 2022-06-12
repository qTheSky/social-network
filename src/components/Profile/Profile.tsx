import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {StoreReduxType} from '../../redux/redux-store';


type profileType = {
}

const Profile = (props: profileType) => {
		return (
				<div>
						<ProfileInfo/>
						<MyPostsContainer />
				</div>
		)
}
export default Profile;