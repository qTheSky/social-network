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
								<img src={props.profile.photos.large} alt=""/>
								<div>{props.profile.aboutMe}</div>
						</div>
				</div>
		)
};