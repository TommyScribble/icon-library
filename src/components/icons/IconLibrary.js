import React from 'react';
import AnalyticsGraphBar1 from './AnalyticsGraphBar1';

const Icon = props => {
	switch (props.iconName) {
		case 'AnalyticsGraphBar1':
			return <AnalyticsGraphBar1 {...props} />;
		default:
			return <div>Check the iconName prop is correct</div>;
	}
};

export default Icon;
