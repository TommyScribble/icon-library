import React from 'react';

export default function View2(props) {
	return (
		<svg
			id="Bold"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			{...props}
		>
			<title>view</title>
			<path d="M23.431,10.524C20.787,7.614,16.4,4.538,12,4.6,7.6,4.537,3.213,7.615.568,10.524a2.211,2.211,0,0,0,0,2.948C3.181,16.351,7.507,19.4,11.839,19.4h.308c4.347,0,8.671-3.049,11.287-5.929A2.21,2.21,0,0,0,23.431,10.524ZM7.4,12A4.6,4.6,0,1,1,12,16.6,4.6,4.6,0,0,1,7.4,12Z" />
			<circle cx={12} cy={12} r={2} />
		</svg>
	);
}
