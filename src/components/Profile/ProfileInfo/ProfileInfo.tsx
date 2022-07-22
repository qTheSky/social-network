import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileType} from '../../../redux/profile-reducer';
import {ProfileStatus} from './ProfileStatus'

type ProfileInfoPropsType = {
		profile: ProfileType
		status: string
		updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
		if (!props.profile) {
				return <Preloader/>
		}
		const updateStatus = (status: string) => {
				props.updateStatus(status)
		}
		return (
				<div>
						{/*<div>*/}
						{/*		<img src="https://klike.net/uploads/posts/2019-06/1561528146_5.jpg"*/}
						{/*		     style={{width: '700px'}}*/}
						{/*		/>*/}
						{/*</div>*/}
						<div className={s.descriptionBlock}>
								<img
										src={props.profile.photos.large
												? props.profile.photos.large
												: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'}
										alt="ava"
										width={'175px'}
								/>
								<ProfileStatus status={props.status} updateStatus={updateStatus}/>
								<div>{props.profile.aboutMe ? props.profile.aboutMe : 'пользователь не оставил информации о себе'}</div>
						</div>
				</div>
		)
};