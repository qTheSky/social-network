import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, ProfileType} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
		userId: string
}


type MapStatePropsType = {
		profile: ProfileType
		isAuth: boolean
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
				if (!this.props.isAuth) return <Redirect to={'/login'}/>

				return <Profile profile={this.props.profile}/>
		}
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
		profile: state.profilePage.profile,
		isAuth: state.auth.isAuth,
})

const withUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent)