import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component.js';
import { selectCollections } from '../../redux/shop/shop.selectors.js';
import './ShopPage.styles.scss';

const ShopPage = ({ collections }) => {
	return (
		<div className="ShopPage">
			{collections.map(({ id, ...collection }) => (
				<CollectionPreview key={id} {...collection} />
			))}
		</div>
	);
};

const mapStateTpProps = createStructuredSelector({
	collections: selectCollections,
});

export default connect(mapStateTpProps)(ShopPage);
