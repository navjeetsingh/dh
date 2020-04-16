import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview.container.js';
import CollectionPageContainer from '../../pages/CollectionPage/CollectionPage.container.js';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions.js';

class ShopPage extends Component {
	componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
	}
	
	render() {
		const { match } = this.props;
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
	}
}


const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
