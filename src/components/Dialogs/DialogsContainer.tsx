import React from 'react';
import {DialogsPageType, sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';


type mapStatePropsType = {
		dialogsPage: DialogsPageType
}

type mapDispatchToProps = {
		updateNewMessageBody: (body: string) => void
		sendMessage: () => void
}

export type DialogsPropsType = mapStatePropsType & mapDispatchToProps

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
		return {
				dialogsPage: state.dialogsPage
		}
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
		return {
				updateNewMessageBody: (body: string) => {
						dispatch(updateNewMessageBodyCreator(body))
				},
				sendMessage: () => {
						dispatch(sendMessageCreator())
				}
		}
}

export const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)