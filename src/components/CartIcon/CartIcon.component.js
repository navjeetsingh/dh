import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';
import './CartIcon.styles.scss';

const CartIcon = () => (
	<div className="CartIcon">
		<ShoppingIcon className="ShoppingIcon" />
		<span className="item-count">0</span>
	</div>
);

export default CartIcon;
