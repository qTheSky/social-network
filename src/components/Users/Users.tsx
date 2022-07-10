import React from 'react';
import {UserType} from '../../redux/users-reducer';
import s from './Users.module.css'
import userPhoto from './../../assets/images/user.jpg'
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type UsersPropsType = {
		totalUsersCount: number
		pageSize: number
		currentPage: number
		onPageChanged: (pageNumber: number) => void
		users: UserType[]
		follow: (id: number) => void
		unfollow: (id: number) => void
		toggleFollowingProgress: (isFetching: boolean, userId: number) => void
		followingInProgress: any
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
								{pages.map((p, i) => {
										return <span
												className={props.currentPage === p ? s.selectedPage : ''}
												onClick={() => props.onPageChanged(p)}
												key={i}
										>
												{p}
										</span>
								})}

						</div>
						{
								props.users.map(u =>
										<div key={u.id}>
												<span>
														<div>
																<NavLink to={'/profile/' + u.id}>
																<img className={s.userPhoto}
																     src={u.photos.small !== null
																		     ? u.photos.small
																		     : userPhoto}
																     alt=""/>
																		</NavLink>
														</div>
														<div>
																{
																		u.followed
																				? <button disabled={props.followingInProgress.some((id: number) => id === u.id)}
																				          onClick={() => {
																						          props.toggleFollowingProgress(true, u.id)
																						          axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
																								          withCredentials: true,
																								          headers: {
																										          'API-KEY': 'c0313221-8484-4768-9d93-144296373ae6'
																								          },
																						          })
																								          .then(response => {
																										          if (response.data.resultCode === 0) {
																												          props.unfollow(u.id)
																										          }
																										          props.toggleFollowingProgress(false, u.id)
																								          })

																				          }}
																				>unfollow</button>
																				: <button disabled={props.followingInProgress.some((id: number) => id === u.id)}
																				          onClick={() => {
																						          props.toggleFollowingProgress(true, u.id)
																						          axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
																								          withCredentials: true,
																								          headers: {
																										          'API-KEY': 'c0313221-8484-4768-9d93-144296373ae6'
																								          },
																						          })
																								          .then(response => {
																										          if (response.data.resultCode === 0) {
																												          props.follow(u.id)
																										          }
																										          props.toggleFollowingProgress(false, u.id)

																								          })

																				          }}>follow</button>
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
