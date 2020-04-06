import React from 'react';
import CustomButton from '../CustomButton/CustomButton.component.js'
import './CollectionItem.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
	<div className="CollectionItem">
		<div
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
			className="image"
		/>
		<div className="CollectionFooter">
			<span className="name">{name}</span>
			<span className="price">{price}</span>
		</div>
		<CustomButton inverted>Add to cart</CustomButton>
	</div>
);

export default CollectionItem;
