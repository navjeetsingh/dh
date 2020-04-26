import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {DirectoryMenuContainer} from './Directory.styles.js';
import { selectDirectorySelections } from '../../redux/directory/directory.selectors.js';
import MenuItem from '../MenuItem/MenuItem.component.js';

const Directory = ({ sections }) => (
	<DirectoryMenuContainer>
		{sections.map(({ id, ...section }) => (
			<MenuItem key={id} {...section} />
		))}
	</DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySelections
});

export default connect(mapStateToProps)(Directory);
