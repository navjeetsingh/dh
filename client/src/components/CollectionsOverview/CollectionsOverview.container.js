import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import CollectionsOverview from './CollectionsOverview.component';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors.js';
import WithSpinner from '../../components/WithSpinner/WithSpinner.component.js';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer
