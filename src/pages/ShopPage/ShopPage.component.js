import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview.component';
import WithSpinner from '../../components/WithSpinner/WithSpinner.component.js';
import CollectionPage from '../../pages/CollectionPage/CollectionPage.component.js';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions.js';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors.js';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
	componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
	}
	
	render() {
		const { match, isCollectionLoaded } = this.props;
		return (
			<>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionsOverviewWithSpinner
							isLoading={!isCollectionLoaded}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionsPageWithSpinner
							isLoading={!isCollectionLoaded}
							{...props}
						/>
					)}
				/>
			</>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	isCollectionLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
