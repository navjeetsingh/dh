import React from 'react';
import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './CartItem.styles.js';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<CartItemContainer>
		<CartItemImage src={imageUrl} alt={name} />
		<ItemDetailsContainer>
			<span>{name}</span>
			<span>
				{quantity} x ${price}
			</span>
		</ItemDetailsContainer>
	</CartItemContainer>
);

export default CartItem;
