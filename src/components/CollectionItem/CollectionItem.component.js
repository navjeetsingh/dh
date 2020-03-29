import React from 'react';
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
	</div>
);

export default CollectionItem;
