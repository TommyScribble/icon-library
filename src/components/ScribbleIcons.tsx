import React from 'react';
import PropTypes from 'prop-types';

import AnalyticsGraphBar from './icons/AnalyticsGraphBar';
import AnalyticsGraphBar1 from './icons/AnalyticsGraphBar1';
import AnalyticsGraphBar2 from './icons/AnalyticsGraphBar2';
import Burger from './icons/Burger';
import Burger1 from './icons/Burger1';
import Burger2 from './icons/Burger2';
import CaretUp from './icons/carets/CaretUp';
import CaretUp1 from './icons/carets/CaretUp1';
import CaretUp2 from './icons/carets/CaretUp2';
import Cross from './icons/Cross';
import Cross1 from './icons/Cross1';
import Cross2 from './icons/Cross2';

type IconProps = {
	iconName: string;
	color?: string;
};

const buildIcon = (icon: string, iconList: object) => {
	if (!icon) console.log(`Please add and iconName Prop`);
	if (!iconList[icon])
		console.log(
			`The is no icon called ${icon} in this repo. Please refer to the readme`
		);
	return iconList[icon];
};

const Icon = ({ iconName, color }: IconProps) => {
	type Icons = {
		[icon: string]: React.ReactElement;
	};

	const IconObj: Icons = {
		AnalyticsGraphBar: <AnalyticsGraphBar color={color} />,
		AnalyticsGraphBar1: <AnalyticsGraphBar1 color={color} />,
		AnalyticsGraphBar2: <AnalyticsGraphBar2 color={color} />,
		Burger: <Burger color={color} />,
		Burger1: <Burger1 color={color} />,
		Burger2: <Burger2 color={color} />,
		CaretUp: <CaretUp color={color} />,
		CaretUp1: <CaretUp1 color={color} />,
		CaretUp2: <CaretUp2 color={color} />,
		Cross: <Cross color={color} />,
		Cross1: <Cross1 color={color} />,
		Cross2: <Cross2 color={color} />,
	};

	return buildIcon(iconName, IconObj);
};

Icon.defaultProps = {
	color: '#4d4d4d',
};

Icon.propTypes = {
	color: PropTypes.string,
};

export default Icon;
