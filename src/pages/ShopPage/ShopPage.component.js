import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview.component';
import WithSpinner from '../../components/WithSpinner/WithSpinner.component.js';
import CollectionPage from '../../pages/CollectionPage/CollectionPage.component.js';
import {
	firestore,
	convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils.js';
import { updateCollections } from '../../redux/shop/shop.actions.js';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		};
	}
	unsubscribeFromSnapshot = null;
	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection('collections');


		fetch('https://firestore.googleapis.com/v1/projects/dh-db-1ce1a/databases/(default)')
			.then(response => response.json())
			.then(collections=> console.log(collections))
		
		// collectionRef.get().then((snapshot) => {
		// 	const collectionMap = convertCollectionSnapshotToMap(snapshot);
		// 	updateCollections(collectionMap);
		// 	this.setState({ loading: false });
		// });
	}
	render() {
		const { match } = this.props;
		const { loading } = this.state;
		return (
			<>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionsOverviewWithSpinner isLoading={loading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionsPageWithSpinner isLoading={loading} {...props} />
					)}
				/>
			</>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) =>
		dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
