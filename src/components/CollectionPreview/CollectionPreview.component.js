import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem.component.js'
import './CollectionPreview.styles.scss';

const CollectionPreview = ({ title, items }) => (
	<div className="CollectionPreview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{items
				.filter((item, index) => index < 4)
				.map(({ id, ...item }) => (
					<CollectionItem key={id} {...item} />
				))}
		</div>
	</div>
);

export default CollectionPreview;
