import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview.container.js';
import CollectionPageContainer from '../../pages/CollectionPage/CollectionPage.container.js';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions.js';

class ShopPage extends Component {
	componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
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
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
