import React from 'react';
import Icon from './components/IconLibrary';

const IconPreview = () => {
	return (
		<div className="columns">
			<div className="column">
				<Icon
					iconName={'AnalyticsGraphBar1'}
					// fill={'red'}
					width={'50px'}
					ariaHidden={true}
					focussable={'false'}
					svgClass={'test-class'}
				/>
				<p>AnalyticsGraphBar1</p>
			</div>
		</div>
	);
};

export default IconPreview;
