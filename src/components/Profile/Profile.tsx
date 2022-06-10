import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {StoreReduxType} from '../../redux/redux-store';


type profileType = {
		store: StoreReduxType
}

const Profile = (props: profileType) => {
		return (
				<div>
						<ProfileInfo/>
						<MyPostsContainer store={props.store}/>
				</div>
		)
}
export default Profile;