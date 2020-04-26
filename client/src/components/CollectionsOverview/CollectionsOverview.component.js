import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {CollectionsOverviewContainer } from './CollectionsOverview.styles.js';
import CollectionPreview from '../CollectionPreview/CollectionPreview.component.js';
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors.js';


const CollectionsOverview = ({ collections }) => (
	<CollectionsOverviewContainer>
		{collections.map(({ id, ...collection }) => (
			<CollectionPreview key={id} {...collection} />
		))}
	</CollectionsOverviewContainer>
);

const mapStateTpProps = createStructuredSelector({
	collections: selectCollectionForPreview,
});

export default connect(mapStateTpProps)(CollectionsOverview);
