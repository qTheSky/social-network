import React from 'react';
import preloader from '../../../assets/images/spinner.svg';

export const Preloader = () => {
		return (
				<div  style={{backgroundColor: 'white'}}>
						<img src={preloader}/>
				</div>
		);
};
