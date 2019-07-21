import React from 'react';
import AnalyticsGraphBar1 from '../components/icons/AnalyticsGraphBar1';
import CaretDown from '../components/icons/CaretDown';

const IconLibrary = props => {
	switch (props.iconName) {
		case 'AnalyticsGraphBar1':
			return <AnalyticsGraphBar1 {...props} />;
		case 'CaretDown':
			return <CaretDown {...props} />;
		default:
			return <div>There is something wrong with the iconName prop</div>;
	}
};

export default IconLibrary;
