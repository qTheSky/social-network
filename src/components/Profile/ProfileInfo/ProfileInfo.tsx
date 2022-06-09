import React from 'react';
import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://klike.net/uploads/posts/2019-06/1561528146_5.jpg"
                     style={{width:'700px'}}
                />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
};