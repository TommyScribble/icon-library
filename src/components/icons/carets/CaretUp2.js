import React from 'react';

const CaretUp2 = ({ color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="24"
			height="24"
			fill="none"
			stroke={color}
			strokeWidth="3"
			aria-hidden={true}
			focusable={false}
		>
			<title>caret</title>
			<path d="M22.94 19.06l-12-12" />
			<path d="M13.06 7.06l-12 12" />
		</svg>
	);
};

export default CaretUp2;
