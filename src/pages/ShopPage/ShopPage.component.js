import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import './ShopPage.styles.scss';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component.js';

class ShopPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: SHOP_DATA
		};
	}

	render() {
		const { collections } = this.state;
		return (
			<div className="ShopPage">
				{collections.map(({ id, ...collection }) => (
					<CollectionPreview key={id} {...collection} />
				))}
			</div>
		);
	}
}

export default ShopPage;
