import React from 'react';
import BabyTrolley1 from '/icons/BabyTrolley1';

const IconLibrary = props => {
	switch (props.iconName) {
		case 'BabyTrolley1':
			return <BabyTrolley1 {...props} />;
		default:
			return <div>There is something wrong with the iconName prop</div>;
	}
};

export default IconLibrary;
