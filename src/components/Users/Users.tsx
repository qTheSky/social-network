import React from 'react';
import {UserType} from '../../redux/users-reducer';
import s from './Users.module.css'
import userPhoto from './../../assets/images/user.jpg'

type UsersPropsType = {
		totalUsersCount: number
		pageSize: number
		currentPage: number
		onPageChanged: (pageNumber: number) => void
		users: UserType[]
		follow:(id: number)=> void
		unfollow:(id: number)=> void
}

export const Users = (props: UsersPropsType) => {

		const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

		const pages = []
		for (let i = 1; i <= pagesCount; i++) {
				pages.push(i)
		}
		return (
				<div>
						<div>
								{pages.map(p => {
										return <span className={props.currentPage === p ? s.selectedPage : ''}
										             onClick={() => props.onPageChanged(p)}>
												{p}
										</span>
								})}

						</div>
						{
								props.users.map(u =>
										<div key={u.id}>
												<span>
														<div>
																<img className={s.userPhoto}
																     src={u.photos.small !== null
																		     ? u.photos.small
																		     : userPhoto}
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
