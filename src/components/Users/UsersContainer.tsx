import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
		follow,
		setCurrentPage, setTotalUsersCount,
		setUsers, toggleFollowingProgress,
		toggleIsFetching,
		unfollow,
		UserType
} from '../../redux/users-reducer';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {usersAPI} from '../../api/api';


type mapStatePropsType = {
		users: UserType[]
		pageSize: number
		totalUsersCount: number
		currentPage: number
		isFetching: boolean
		followingInProgress: boolean
}
type mapDispatchToPropsType = {
		follow: (userId: number) => void
		unfollow: (userId: number) => void
		setUsers: (users: UserType[]) => void
		setCurrentPage: (pageNumber: number) => void
		setTotalUsersCount: (totalCount: number) => void
		toggleIsFetching: (isFetching: boolean) => void
		toggleFollowingProgress: (isFetchig: boolean, userId: number) => void
}

export type UsersContainerPropsType = mapStatePropsType & mapDispatchToPropsType


class UsersContainer extends React.Component<UsersContainerPropsType> {
		componentDidMount() {
				this.props.toggleIsFetching(true)

				usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
						this.props.toggleIsFetching(false)
						this.props.setUsers(data.items)
						this.props.setTotalUsersCount(data.totalCount)
				})
		}

		onPageChanged = (pageNumber: number) => {
				this.props.toggleIsFetching(true)
				this.props.setCurrentPage(pageNumber)

				usersAPI.getUsers(pageNumber, this.props.pageSize)
						.then(data => {
								this.props.toggleIsFetching(false)
								this.props.setUsers(data.items)
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
						       toggleFollowingProgress={this.props.toggleFollowingProgress}
						       followingInProgress={this.props.followingInProgress}
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
				followingInProgress: state.usersPage.followingInProgress,
		}
}


export default connect(mapStateToProps,
		{
				follow,
				unfollow,
				setUsers,
				setCurrentPage,
				setTotalUsersCount,
				toggleIsFetching,
				toggleFollowingProgress,
		})(UsersContainer)