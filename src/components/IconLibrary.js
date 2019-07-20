import React from 'react';
import AnalyticsGraphBar1 from '../components/icons/AnalyticsGraphBar1';

const IconLibrary = props => {
	switch (props.iconName) {
		case 'AnalyticsGraphBar1':
			return <AnalyticsGraphBar1 {...props} />;
		default:
			return <div>There is something wrong with the iconName prop</div>;
	}
};

export default IconLibrary;
