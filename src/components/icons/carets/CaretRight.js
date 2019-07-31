import React from 'react';

const CaretRight = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
			<g clip-path="url(#A)" stroke="#4d4d4d">
				<path d="M5.646 23.646l12-12" />
				<path d="M17.646 12.354l-12-12" />
			</g>
			<defs>
				<clipPath id="A">
					<path
						fill="#fff"
						transform="matrix(0 -1 1 0 0 24)"
						d="M0 0h24v24H0z"
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

export default CaretRight;
