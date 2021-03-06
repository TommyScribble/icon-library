import React from 'react';

const CaretUp = ({ color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="24"
			height="24"
			fill="none"
			stroke={color}
			aria-hidden={true}
			focusable={false}
		>
			<title>caret</title>
			<path d="M23.646 18.354l-12-12" />
			<path d="M12.354 6.354l-12 12" />
		</svg>
	);
};

export default CaretUp;
