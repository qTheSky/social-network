import React from 'react';
import s from './Users.module.css'
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';
import userPhoto from '../../../src/assets/images/user.jpg'

export const Users = (props: UsersPropsType) => {

		if (props.usersPage.users.length === 0) {

				axios.get('https://social-network.samuraijs.com/api/1.0/users')
						.then(response => {
								props.setUsers(response.data.items)
						})

		}
		return (
				<div>
						{
								props.usersPage.users.map(u =>
										<div key={u.id}>
												<span>
														<div>
																<img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto}
																     alt=""/>
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
																<div>{u.name}</div>
																<div>{u.status}</div>
														</span>
														<span>
																<div>{'u.location.country'}</div>
																<div>{'u.location.city'}</div>
														</span>
												</span>
										</div>)
						}
				</div>
		);
};
