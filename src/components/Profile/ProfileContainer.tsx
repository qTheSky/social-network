import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, ProfileType} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type PathParamsType = {
		userId: string
}


type MapStatePropsType = {
		profile: ProfileType
}

type MapDispatchToPropsType = {
		getUserProfile: any
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
		}

		render() {
				return <Profile profile={this.props.profile}/>
		}
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
		profile: state.profilePage.profile,
})


export default compose<React.ComponentType>(
		connect(mapStateToProps, {getUserProfile}),
		withRouter,
		withAuthRedirect,
)(ProfileContainer)

