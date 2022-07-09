import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';


type mapStatePropsType = {
		isAuth: boolean
		login: string | null
}

type mapDispatchToPropsType = {
		setAuthUserData: (id: number, email: string, login: string) => void
}

type HeaderContainerPropsType = mapStatePropsType & mapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
		componentDidMount() {
				axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
						withCredentials: true
				})
						.then(response => {
								if (response.data.resultCode === 0) {
										const {id, login, email} = response.data.data
										this.props.setAuthUserData(id, email, login)
								}
						})
		}

		render() {
				return <Header isAuth={this.props.isAuth}
				               login={this.props.login}
				/>
		}
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
		isAuth: state.auth.isAuth,
		login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);