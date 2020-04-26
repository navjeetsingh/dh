import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import CollectionPage from './CollectionPage.component.js';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors.js';
import WithSpinner from '../../components/WithSpinner/WithSpinner.component.js';

const mapStateToProps = createStructuredSelector({
	isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage)

export default CollectionPageContainer