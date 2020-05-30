import React from 'react';

const Burger2 = ({ color }) => {
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
			<title>Burger2</title>
			<rect y="2" width="24" height="4" rx="1" />
			<rect y="10" width="24" height="4" rx="1" />
			<rect y="18" width="24" height="4" rx="1" />
		</svg>
	);
};

export default Burger2;
