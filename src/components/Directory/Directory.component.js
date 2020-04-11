import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySelections } from '../../redux/directory/directory.selectors.js';
import MenuItem from '../MenuItem/MenuItem.component.js';
import './Directory.styles.scss';

const Directory = ({ sections }) => (
	<div className="DirectoryMenu">
		{sections.map(({ id, ...section }) => (
			<MenuItem key={id} {...section} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySelections
});

export default connect(mapStateToProps)(Directory);
