import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getAuthUserData, logout} from '../../redux/auth-reducer';


type mapStatePropsType = {
		isAuth: boolean
		login: string | null
}

type mapDispatchToPropsType = {
		getAuthUserData: () => void
		logout: () => void
}

type HeaderContainerPropsType = mapStatePropsType & mapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
		componentDidMount() {
				this.props.getAuthUserData()
		}

		render() {
				return <Header isAuth={this.props.isAuth}
				               login={this.props.login}
				               logout={this.props.logout}
				/>
		}
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
		isAuth: state.auth.isAuth,
		login: state.auth.login,
})

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);