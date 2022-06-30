import React from 'react';
import s from './Users.module.css'
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';
import userPhoto from '../../../src/assets/images/user.jpg'

export class Users extends React.Component<UsersPropsType> {
		componentDidMount() {
				axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
						.then(response => {
								this.props.setUsers(response.data.items)
								this.props.setTotalUserCount(response.data.totalCount)
						})
		}

		onPageChanged = (pageNumber:number) => {
				this.props.setCurrentPage(pageNumber)
				axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
						.then(response => {
								this.props.setUsers(response.data.items)
						})
		}

		render() {

				const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

				const pages = []
				for (let i = 1; i <= pagesCount; i++) {
						pages.push(i)
				}

				return <div>
						<div>
								{pages.map(p => {
										return <span className={this.props.currentPage === p ? s.selectedPage : ''}
										             onClick={()=>this.onPageChanged(p)}>
												{p}
										</span>
								})}

						</div>
						{
								this.props.users.map(u =>
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
																						this.props.unfollow(u.id)
																				}}>
																						unfollow
																				</button>
																				: <button onClick={() => {
																						this.props.follow(u.id)
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
		}
}