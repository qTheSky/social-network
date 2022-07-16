import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileType} from '../../../redux/profile-reducer';

type ProfileInfoPropsType = {
		profile: ProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
		if (!props.profile) {
				return <Preloader/>
		}
		return (
				<div>
						<div>
								<img src="https://klike.net/uploads/posts/2019-06/1561528146_5.jpg"
								     style={{width: '700px'}}
								/>
						</div>
						<div className={s.descriptionBlock}>
								<img
										src={props.profile.photos.large
												? props.profile.photos.large
												: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'}
										alt="ava"
										width={'175px'}
								/>
								<div>{props.profile.aboutMe ? props.profile.aboutMe : 'пользователь не оставил информации о себе'}</div>
						</div>
				</div>
		)
};