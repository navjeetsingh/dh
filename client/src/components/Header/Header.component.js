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
import CartIcon from '../CartIcon/CartIcon.component.js';
import CartDropdown from '../CartDropdown/CartDropdown.component.js';
import { selectCartHidden } from '../../redux/cart/cart.selectors.js';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';
import { signOutStart } from '../../redux/user/user.actions.js';

const Header = ({ currentUser, hidden, signOutStart }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>
		<OptionsContainer>
			<OptionContainer to="/shop">SHOP</OptionContainer>
			<OptionContainer to="/contact">CONTACT</OptionContainer>
			{currentUser ? (
				<OptionContainer as="div" onClick={signOutStart}>
					SIGN OUT
				</OptionContainer>
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

const mapDispatchToProps = dispatch => ({
	signOutStart: ()=> dispatch(signOutStart())
})

export default connect(mapStateTpProps, mapDispatchToProps)(Header);
