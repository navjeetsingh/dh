import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import './CartIcon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className="CartIcon" onClick={toggleCartHidden}>
		<ShoppingIcon className="ShoppingIcon" />
		<span className="item-count">{itemCount}</span>
	</div>
);

const mapStateToProps = (state) => ({
	itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
