import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {
		followAC,
		setCurrentPageAC,
		setUsersAC,
		setUsersTotalCountAC,
		unfollowAC,
		UsersPageType,
		UserType
} from '../../redux/users-reducer';
import {Users} from './Users';


type mapStatePropsType = {
		users: UserType[]
		pageSize: number
		totalUsersCount: number
		currentPage: number
}
type mapDispatchToPropsType = {
		follow: (userId: number) => void
		unfollow: (userId: number) => void
		setUsers: (users: UserType[]) => void
		setCurrentPage: (pageNumber: number) => void
		setTotalUserCount:(totalCount: number)=> void
}

export type UsersPropsType = mapStatePropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
		return {
				users: state.usersPage.users,
				pageSize: state.usersPage.pageSize,
				totalUsersCount: state.usersPage.totalUsersCount,
				currentPage: state.usersPage.currentPage,
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
				setTotalUserCount:(totalCount:number)=>{
dispatch(setUsersTotalCountAC(totalCount))
				},
		}
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)