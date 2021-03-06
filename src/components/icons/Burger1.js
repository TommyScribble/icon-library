import React from 'react';

const Burger1 = ({ color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="24"
			height="24"
			fill={color}
			stroke="none"
			aria-hidden={true}
			focusable={false}
		>
			<title>Burger1</title>
			<rect y="4" width="24" height="1.5" rx=".75" />
			<rect y="11" width="24" height="1.5" rx=".75" />
			<rect y="18" width="24" height="1.5" rx=".75" />
		</svg>
	);
};

export default Burger1;
