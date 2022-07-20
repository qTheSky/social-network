import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
		follow,
		getUsers,
		setCurrentPage,
		toggleFollowingProgress, unfollow,
		UserType
} from '../../redux/users-reducer';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../../hoc/WithAuthRedirect';
import {Dialogs} from '../Dialogs/Dialogs';
import {DialogsContainer} from '../Dialogs/DialogsContainer';


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
		setCurrentPage: (pageNumber: number) => void
		toggleFollowingProgress: (isFetchig: boolean, userId: number) => void
		getUsers: any
}

export type UsersContainerPropsType = mapStatePropsType & mapDispatchToPropsType


class UsersContainer extends React.Component<UsersContainerPropsType> {
		componentDidMount() {
				this.props.getUsers(this.props.currentPage, this.props.pageSize)
		}

		onPageChanged = (pageNumber: number) => {
				this.props.setCurrentPage(pageNumber)
				this.props.getUsers(pageNumber, this.props.pageSize)
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


export default withAuthRedirect(connect(mapStateToProps,
		{follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers})(UsersContainer))