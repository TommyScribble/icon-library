import React from 'react';

const Cross2 = ({ color }) => {
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
				x="4.929"
				y="2.1"
				width="24"
				height="4"
				rx="1"
				transform="rotate(45 4.929 2.1)"
			/>
			<rect
				x="21.799"
				y="4.828"
				width="24"
				height="4"
				rx="1"
				transform="rotate(135 21.799 4.828)"
			/>
		</svg>
	);
};

export default Cross2;
