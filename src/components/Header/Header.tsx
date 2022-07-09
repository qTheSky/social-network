import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

const Header = (props: any) => {
		return <header className={s.header}>
				<img
						src="https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg"/>
				<div className={s.loginBlock}>
						{props.isAuth
								? props.login
								: <NavLink to={'/login'}>Login</NavLink>}
				</div>
		</header>
}
export default Header;