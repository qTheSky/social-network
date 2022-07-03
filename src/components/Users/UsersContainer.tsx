import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {
		followAC,
		setCurrentPageAC,
		setUsersAC,
		setUsersTotalCountAC, toggleIsFetchingAC,
		unfollowAC,
		UserType
} from '../../redux/users-reducer';
import axios from 'axios';
import {Users} from './Users';
import preloader from './../../assets/images/spinner.svg'
import {Preloader} from '../common/Preloader/Preloader';


type mapStatePropsType = {
		users: UserType[]
		pageSize: number
		totalUsersCount: number
		currentPage: number
		isFetching: boolean
}
type mapDispatchToPropsType = {
		follow: (userId: number) => void
		unfollow: (userId: number) => void
		setUsers: (users: UserType[]) => void
		setCurrentPage: (pageNumber: number) => void
		setTotalUserCount: (totalCount: number) => void
		toggleIsFetching: (isFetching: boolean) => void
}

export type UsersAPIComponentPropsType = mapStatePropsType & mapDispatchToPropsType


class UsersContainer extends React.Component<UsersAPIComponentPropsType> {
		componentDidMount() {
				this.props.toggleIsFetching(true)
				axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
						.then(response => {
								this.props.toggleIsFetching(false)
								this.props.setUsers(response.data.items)
								this.props.setTotalUserCount(response.data.totalCount)
						})
		}

		onPageChanged = (pageNumber: number) => {
				this.props.toggleIsFetching(true)
				this.props.setCurrentPage(pageNumber)
				axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
						.then(response => {
								this.props.toggleIsFetching(false)
								this.props.setUsers(response.data.items)
						})
		}

		render() {
				return <>
						{this.props.isFetching && <Preloader/>}
						<Users totalUsersCount={this.props.totalUsersCount}
						       pageSize={this.props.pageSize}
						       currentPage={this.props.currentPage}
						       onPageChanged={this.onPageChanged}
						       users={this.props.users}
						       follow={this.props.follow}
						       unfollow={this.props.unfollow}
						/>
				</>
		}
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
		return {
				users: state.usersPage.users,
				pageSize: state.usersPage.pageSize,
				totalUsersCount: state.usersPage.totalUsersCount,
				currentPage: state.usersPage.currentPage,
				isFetching: state.usersPage.isFetchig,
		}
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
		return {
				follow: (userId: number) => {
						dispatch(followAC(userId))
				},
				unfollow: (userId: number) => {
						dispatch(unfollowAC(userId))
				},
				setUsers: (users: UserType[]) => {
						dispatch(setUsersAC(users))
				},
				setCurrentPage: (pageNumber: number) => {
						dispatch(setCurrentPageAC(pageNumber))
				},
				setTotalUserCount: (totalCount: number) => {
						dispatch(setUsersTotalCountAC(totalCount))
				},
				toggleIsFetching: (isFetching: boolean) => {
						dispatch(toggleIsFetchingAC(isFetching))
				},
		}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)