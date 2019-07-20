import React from 'react';
import Icon from './components/icons/IconLibrary';

const App = () => {
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

export default App;
