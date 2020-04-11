import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../CollectionPreview/CollectionPreview.component.js';
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors.js';

import './CollectionsOverview.styles.scss';

const CollectionsOverview = ({ collections }) => (
	<div className="CollectionOverview">
		{collections.map(({ id, ...collection }) => (
			<CollectionPreview key={id} {...collection} />
		))}
	</div>
);

const mapStateTpProps = createStructuredSelector({
	collections: selectCollectionForPreview,
});

export default connect(mapStateTpProps)(CollectionsOverview);
