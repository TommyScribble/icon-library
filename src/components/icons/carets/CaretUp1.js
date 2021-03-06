import React from 'react';

const CaretUp1 = ({ color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="24"
			height="24"
			fill="none"
			stroke={color}
			strokeWidth="2"
			aria-hidden={true}
			focusable={false}
		>
			<title>caret</title>
			<path d="M23.293 18.707l-12-12" />
			<path d="M12.707 6.707l-12 12" />
		</svg>
	);
};

export default CaretUp1;
