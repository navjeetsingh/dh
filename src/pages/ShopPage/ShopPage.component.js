import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionOverview/ CollectionsOverview.component.js';
import CollectionPage from '../../pages/CollectionPage/CollectionPage.component.js';
import './ShopPage.styles.scss';

const ShopPage = ({ match }) => {
	return (
		<div className="ShopPage">
			<Route
				exact
				path={`${match.path}`}
				render={() => <CollectionsOverview />}
			/>
			<Route
				path={`${match.path}/:collectionId`}
				render={() => <CollectionPage />}
			/>
		</div>
	);
};

export default ShopPage;
