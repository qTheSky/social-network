import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
		follow,
		setCurrentPage, setTotalUsersCount,
		setUsers,
		toggleIsFetching,
		unfollow,
		UserType
} from '../../redux/users-reducer';
import axios from 'axios';
import {Users} from './Users';
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
		setTotalUsersCount: (totalCount: number) => void
		toggleIsFetching: (isFetching: boolean) => void
}

export type UsersContainerPropsType = mapStatePropsType & mapDispatchToPropsType


class UsersContainer extends React.Component<UsersContainerPropsType> {
		componentDidMount() {
				this.props.toggleIsFetching(true)
				axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
						{
								withCredentials: true
						})
						.then(response => {
								this.props.toggleIsFetching(false)
								this.props.setUsers(response.data.items)
								this.props.setTotalUsersCount(response.data.totalCount)
						})
		}

		onPageChanged = (pageNumber: number) => {
				this.props.toggleIsFetching(true)
				this.props.setCurrentPage(pageNumber)
				axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
						{
								withCredentials: true
						})
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


export default connect(mapStateToProps,
		{follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,})(UsersContainer)