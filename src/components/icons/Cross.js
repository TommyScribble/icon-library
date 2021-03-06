import React from 'react';

const Cross = ({ color }) => {
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
			<title>cross</title>
			<rect
				x="3.868"
				y="2.661"
				width="24"
				height="1"
				rx=".5"
				transform="rotate(45 3.868 2.661)"
			/>
			<rect
				x="20.678"
				y="3.707"
				width="24"
				height="1"
				rx=".5"
				transform="rotate(135 20.678 3.707)"
			/>
		</svg>
	);
};

export default Cross;
