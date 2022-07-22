import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getStatus, getUserProfile, ProfileType, updateStatus} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';

type PathParamsType = {
		userId: string
}


type MapStatePropsType = {
		profile: ProfileType
		status: string
}

type MapDispatchToPropsType = {
		getUserProfile: (userId: string) => void
		getStatus: (userId: string) => void
		updateStatus: (status: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

		componentDidMount() {
				let userId = this.props.match.params.userId
				if (!userId) {
						userId = '2'
				}
				this.props.getUserProfile(userId)
				this.props.getStatus(userId)
		}

		render() {
				return <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
		}
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
		profile: state.profilePage.profile,
		status: state.profilePage.status,
})


export default compose<React.ComponentType>(
		connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
		withRouter,
)(ProfileContainer)

