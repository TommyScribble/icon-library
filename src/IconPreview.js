import React from 'react';
import Icon from './components/IconLibrary';

const IconPreview = () => {
	return (
		<React.Fragment>
			<Icon
				iconName={'AnalyticsGraphBar1'}
				// fill={'red'}
				width={'50px'}
				ariaHidden={true}
				focussable={'false'}
				svgClass={'test-class'}
			/>
			<p>AnalyticsGraphBar1</p>
		</React.Fragment>
	);
};

export default IconPreview;
