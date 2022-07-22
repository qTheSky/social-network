import React from 'react';

export class ProfileStatus extends React.Component<any, any> {

		state = {
				editMode: false,
				status: this.props.status
		}

		activateEditMode = () => {
				this.setState({
						editMode: true
				})
		}

		deactivateEditMode = () => {
				this.setState({
						editMode: false
				})
				this.props.updateStatus(this.state.status)
		}
		onChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
				this.setState({
						status: e.currentTarget.value
				})
		}

		render() {
				return (
						<>
								{!this.state.editMode &&
										<div>
												<span onDoubleClick={this.activateEditMode}>{this.props.status || '------------'}</span>
										</div>
								}
								{this.state.editMode &&
										<div>
												<input onBlur={this.deactivateEditMode}
												       autoFocus
												       value={this.state.status}
												       onChange={this.onChangeStatus}
												/>
										</div>
								}
						</>
				);
		}
}
