import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';


type mapStatePropsType = {
		profile: ProfileType
}

type mapDispatchToPropsType = {
		setUserProfile: (profile: ProfileType) => void
}

type PropfileContainerPropsType = mapStatePropsType & mapDispatchToPropsType


class ProfileContainer extends React.Component<PropfileContainerPropsType> {

		componentDidMount() {
				axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
						.then(res => {
								this.props.setUserProfile(res.data)
						})
		}

		render() {
				return <Profile profile={this.props.profile}/>
		}
}


const mapStateToProps = (state: AppStateType): mapStatePropsType => ({profile: state.profilePage.profile})


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)