import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/FormControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';

type FormDataType = {
		email: string
		password: string
		rememberMe: boolean
}
type LoginPropsType = {
		login: (email: string, password: string, rememberMe: boolean) => void
		isAuth: boolean
}

const Login = (props: LoginPropsType) => {
		const onSubmit = (formdata: FormDataType) => {
				props.login(formdata.email, formdata.password, formdata.rememberMe)
		}

		if (props.isAuth) {
				return <Redirect to={'/profile'}/>
		}
		return (
				<div>
						<h1>login</h1>
						<LoginReduxForm onSubmit={onSubmit}/>
				</div>
		)
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
		return (
				<form onSubmit={props.handleSubmit}>
						<div>
								<Field placeholder={'Email'}
								       name={'email'}
								       component={Input}
								       validate={[required]}
								/>
						</div>
						<div>
								<Field placeholder={'Password'}
								       name={'password'}
								       component={Input}
								       validate={[required]}
								       type={'password'}
								/>
						</div>
						<div>
								<Field type="checkbox"
								       name={'rememberMe'}
								       component={Input}/> remember me
						</div>
						<div>
								<button>Login</button>
						</div>
				</form>
		)
}


const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
const mapStateToProps = (state: AppStateType) => ({
		isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login})(Login)
