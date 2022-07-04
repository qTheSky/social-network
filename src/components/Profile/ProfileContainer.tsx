import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
		userId: string
}


type MapStatePropsType = {
		profile: ProfileType
}

type MapDispatchToPropsType = {
		setUserProfile: (profile: ProfileType) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {


		componentDidMount() {
				let userId = this.props.match.params.userId
				if (!userId) {
						userId = '2'
				}
				axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
						.then(res => {
								this.props.setUserProfile(res.data)
						})
		}

		render() {
				return <Profile profile={this.props.profile}/>
		}
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({profile: state.profilePage.profile})

const withUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)