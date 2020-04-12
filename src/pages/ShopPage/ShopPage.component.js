import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview.component';
import CollectionPage from '../../pages/CollectionPage/CollectionPage.component.js';
import './ShopPage.styles.scss';

const ShopPage = ({ match }) => {
	console.log(match)
	return (
		<div className="ShopPage">
			<Route
				exact
				path={`${match.path}`}
				component={CollectionsOverview}
			/>
			<Route
				path={`${match.path}/:collectionId`}
				component={CollectionPage}
			/>
		</div>
	);
};

export default ShopPage;
