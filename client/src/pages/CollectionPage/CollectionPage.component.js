import React from 'react';
import { connect } from 'react-redux';
import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer,
} from './CollectionPage.styles.js';
import CollectionItem from '../../components/CollectionItem/CollectionItem.component.js';
import { selectCollection } from '../../redux/shop/shop.selectors.js';

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<CollectionPageContainer>
			<CollectionTitle>{title}</CollectionTitle>
			<CollectionItemsContainer>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</CollectionItemsContainer>
		</CollectionPageContainer>
	);
};

const mapStateToProps = (state, props) => ({
	collection: selectCollection(props.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
