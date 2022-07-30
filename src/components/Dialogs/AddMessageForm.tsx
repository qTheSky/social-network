import {Field, reduxForm} from 'redux-form';
import React from 'react';
import {TextArea} from '../common/FormsControls/FormControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';

const maxLength = maxLengthCreator(50)

const AddMessageForm = (props: any) => {
		return (
				<form onSubmit={props.handleSubmit}>
						<div>
								<Field component={TextArea}
								       validate={[required, maxLength]}
								       name={'newMessageBody'}
								       placeholder={'Enter your message'}
								/>
						</div>
						<div>
								<button>
										Send
								</button>
						</div>
				</form>
		)
}
export const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)