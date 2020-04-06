import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import './CartIcon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
	<div className="CartIcon" onClick={toggleCartHidden}>
		<ShoppingIcon className="ShoppingIcon" />
		<span className="item-count">0</span>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
