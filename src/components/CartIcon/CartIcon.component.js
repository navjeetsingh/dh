import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './CartIcon.styles.js'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';


const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<CartContainer onClick={toggleCartHidden}>
		<ShoppingIcon className="ShoppingIcon" />
		<ItemCountContainer>{itemCount}</ItemCountContainer>
	</CartContainer>
);

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
