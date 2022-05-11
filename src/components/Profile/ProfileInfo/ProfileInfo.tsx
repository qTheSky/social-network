import React from 'react';
import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://cdn.pixabay.com/photo/2018/05/01/07/52/tuscany-3364921__480.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
};