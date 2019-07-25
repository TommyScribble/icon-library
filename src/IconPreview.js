import React from 'react';
import Icon from './components/ScribbleIcons';

const IconPreview = () => {
	return (
		<div className="columns">
			<div className="column has-text-centered">
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
			<div className="column has-text-centered">
				<Icon
					iconName={'CaretDown'}
					// fill={'red'}
					width={'50px'}
					ariaHidden={true}
					focussable={'false'}
					svgClass={'test-class'}
				/>
				<p>CaretDown</p>
			</div>
		</div>
	);
};

export default IconPreview;
