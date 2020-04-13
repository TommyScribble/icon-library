import React from 'react';
import AnalyticsGraphBar from './icons/AnalyticsGraphBar';
import AnalyticsGraphBar1 from './icons/AnalyticsGraphBar1';
import AnalyticsGraphBar2 from './icons/AnalyticsGraphBar2';
import BabyTrolley from './icons/BabyTrolley';
import BabyTrolley1 from './icons/BabyTrolley1';
import BabyTrolley2 from './icons/BabyTrolley2';
import Burger from './icons/Burger';
import Burger1 from './icons/Burger1';
import Burger2 from './icons/Burger2';
import CaretUp from './icons/carets/CaretUp';
import CaretUp1 from './icons/carets/CaretUp1';
import CaretUp2 from './icons/carets/CaretUp2';
import Cross from './icons/Cross';
import Cross1 from './icons/Cross1';
import Cross2 from './icons/Cross2';

type Icons = {
	[icon: string]: JSX.Element;
};

const IconObj: Icons = {
	AnalyticsGraphBar: <AnalyticsGraphBar />,
	AnalyticsGraphBar1: <AnalyticsGraphBar1 />,
	AnalyticsGraphBar2: <AnalyticsGraphBar2 />,
	BabyTrolley: <BabyTrolley />,
	BabyTrolley1: <BabyTrolley1 />,
	BabyTrolley2: <BabyTrolley2 />,
	Burger: <Burger />,
	Burger1: <Burger1 />,
	Burger2: <Burger2 />,
	CaretUp: <CaretUp />,
	CaretUp1: <CaretUp1 />,
	CaretUp2: <CaretUp2 />,
	Cross: <Cross />,
	Cross1: <Cross1 />,
	Cross2: <Cross2 />,
};

export default IconObj;
