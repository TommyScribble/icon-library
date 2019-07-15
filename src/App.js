import React from 'react';
import Icon from './components/icons/IconLibrary';

const App = () => {
	return (
		<Icon
			iconName={'accountDark'}
			fill={'green'}
			width={'150px'}
			ariaHidden={iconAriaHidden}
			focussable={iconFocussable}
			svgClass={svgClass}
		/>
	);
};

export default App;
