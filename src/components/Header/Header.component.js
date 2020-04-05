import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.styles.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { auth } from '../../firebase/firebase.utils.js';

const Header = ({ currentUser }) => (
	<div className="Header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/contact">
				CONTACT
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link to="/sign-in">SIGN IN</Link>
			)}
		</div>
	</div>
);

const mapStateTpProps = state => ({
	currentUser: state.user.currentUser
})

export default connect(mapStateTpProps)(Header);
