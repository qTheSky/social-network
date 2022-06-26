import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {followAC, setUsersAC, unfollowAC, UsersPageType, UserType} from '../../redux/users-reducer';
import {Users} from './Users';


type mapStatePropsType = {
		usersPage: UsersPageType
}
type mapDispatchToPropsType = {
		follow: (userId: number) => void
		unfollow: (userId: number) => void
		setUsers: (users: UserType[]) => void
}

export type UsersPropsType = mapStatePropsType& mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
		return {
				usersPage: state.usersPage
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
		}
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)