import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/FormControls';
import {required} from '../../utils/validators/validators';

type FormDataType = {
		login: string
		password: string
		rememberMe: boolean
}

export const Login = () => {
		const onSubmit = (formdata: FormDataType) => {
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
								<Field placeholder={'Login'}
								       name={'login'}
								       component={Input}
								       validate={[required]}
								/>
						</div>
						<div>
								<Field placeholder={'Password'}
								       name={'password'}
								       component={Input}
								       validate={[required]}
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

