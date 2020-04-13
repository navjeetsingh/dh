import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionContainer,
} from './Header.styles.js';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { auth } from '../../firebase/firebase.utils.js';
import CartIcon from '../CartIcon/CartIcon.component.js';
import CartDropdown from '../CartDropdown/CartDropdown.component.js';
import { selectCartHidden } from '../../redux/cart/cart.selectors.js';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>
		<OptionsContainer>
			<OptionContainer to="/shop">SHOP</OptionContainer>
			<OptionContainer to="/contact">CONTACT</OptionContainer>
			{currentUser ? (
				<OptionContainer as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionContainer>
			) : (
				<OptionContainer to="/sign-in">SIGN IN</OptionContainer>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

const mapStateTpProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateTpProps)(Header);
