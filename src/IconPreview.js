import React from 'react';
import Icon from './components/ScribbleIcons';

const IconPreview = () => {
	return (
		<div className="columns">
			<div className="column has-text-centered">
				<Icon iconName={'AnalyticsGraphBar1'} />
				<p>AnalyticsGraphBar1</p>
			</div>
			<div className="column has-text-centered">
				<Icon iconName={'CaretDown'} />
				<p>CaretDown</p>
			</div>
		</div>
	);
};

export default IconPreview;
