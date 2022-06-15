import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';


const mapStateToProps = (state: any) => {
		return {
				dialogsPage: state.dialogsPage
		}
}
const mapDispatchToProps = (dispatch: any) => {
		return {
				updateNewMessageBody: (body: any) => {
						dispatch(updateNewMessageBodyCreator(body))
				},
				sendMessage: () => {
						dispatch(sendMessageCreator())
				}
		}
}

export const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)