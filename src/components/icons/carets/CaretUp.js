import React from 'react';

const CaretUp = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
			<g clip-path="url(#A)" stroke="#4d4d4d">
				<path d="M23.646 18.354l-12-12" />
				<path d="M12.354 6.354l-12 12" />
			</g>
			<defs>
				<clipPath id="A">
					<path
						fill="#fff"
						transform="matrix(-1 0 0 -1 24 24)"
						d="M0 0h24v24H0z"
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

export default CaretUp;
