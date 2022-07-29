import React from 'react';
import {DialogsPageType, sendMessage} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {Dialogs} from './Dialogs';


type mapStatePropsType = {
		dialogsPage: DialogsPageType
}

type mapDispatchToProps = {
		sendMessage: (newMessageBody: string) => void
}

export type DialogsPropsType = mapStatePropsType & mapDispatchToProps

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
		return {
				dialogsPage: state.dialogsPage,
		}
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
		return {
				sendMessage: (newMessageBody: string) => {
						dispatch(sendMessage(newMessageBody))
				},
		}
}


export default compose<React.ComponentType>(
		connect(mapStateToProps, mapDispatchToProps),
		withAuthRedirect
)(Dialogs)