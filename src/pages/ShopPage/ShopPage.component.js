import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview.component';
import CollectionPage from '../../pages/CollectionPage/CollectionPage.component.js';

const ShopPage = ({ match }) => {
	console.log(match)
	return (
		<>
			<Route
				exact
				path={`${match.path}`}
				component={CollectionsOverview}
			/>
			<Route
				path={`${match.path}/:collectionId`}
				component={CollectionPage}
			/>
		</>
	);
};

export default ShopPage;
