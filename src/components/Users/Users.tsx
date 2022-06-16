import React from 'react';
import {UsersPageType, UserType} from '../../redux/users-reducer';
import s from './Users.module.css'
import {UsersPropsType} from './UsersContainer';


export const Users = (props: UsersPropsType) => {

		if (props.usersPage.users.length === 0) {
				props.setUsers([
								{
										id: 1,
										photoUrl: 'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg',
										followed: false,
										fullname: 'Dmitry',
										status: 'i am a boss',
										location: {city: 'Minsk', country: 'Belarus'}
								},
								{
										id: 2,
										photoUrl: 'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg',
										followed: true,
										fullname: 'Sasha',
										status: 'i am a boss too',
										location: {city: 'Moscow', country: 'Russia'}
								},
								{
										id: 3,
										photoUrl: 'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg',
										followed: false,
										fullname: 'Andrew',
										status: 'i am a boss 2',
										location: {city: 'Minsk', country: 'Belarus'}
								},
						]
				)
		}
		return (
				<div>
						{
								props.usersPage.users.map(u =>
										<div key={u.id}>
												<span>
														<div>
																<img className={s.userPhoto} src={u.photoUrl} alt=""/>
														</div>
														<div>
																{
																		u.followed
																				? <button onClick={() => {
																						props.unfollow(u.id)
																				}}>
																						unfollow
																				</button>
																				: <button onClick={() => {
																						props.follow(u.id)
																				}}>
																						follow
																				</button>
																}
														</div>
												</span>
												<span>
														<span>
																<div>{u.fullname}</div>
																<div>{u.status}</div>
														</span>
														<span>
																<div>{u.location.country}</div>
																<div>{u.location.city}</div>
														</span>
												</span>
										</div>)
						}
				</div>
		);
};
