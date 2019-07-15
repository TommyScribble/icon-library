import React from 'react';
import Icon from './components/icons/IconLibrary';

const App = () => {
	return (
		<Icon
			iconName={'accountDark'}
			fill={'blue'}
			width={'150px'}
			ariaHidden={true}
			focussable={'false'}
			svgClass={'test-class'}
		/>
	);
};

export default App;
