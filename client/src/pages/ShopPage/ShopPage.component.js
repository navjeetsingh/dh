import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionPageContainer from '../CollectionPage/CollectionPage.container.js';
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview.container.js';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions.js';

const ShopPage = ({ fetchCollectionsStart, match }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<>
			<Route
				exact
				path={`${match.path}`}
				component={CollectionsOverviewContainer}
			/>
			<Route
				path={`${match.path}/:collectionId`}
				component={CollectionPageContainer}
			/>
		</>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
