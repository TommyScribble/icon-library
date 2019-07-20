import React from 'react';

export default function TakingPicturesCircle1(props) {
	return (
		<svg
			id="Bold"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			{...props}
		>
			<title>taking-pictures-circle</title>
			<path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm5.5,16.5H6.5a2,2,0,0,1-2-2v-5a2,2,0,0,1,2-2H8a.916.916,0,0,0,.5-.207L9.793,6A1.872,1.872,0,0,1,11,5.5h2a1.872,1.872,0,0,1,1.207.5L15.5,7.293A.91.91,0,0,0,16,7.5h1.5a2,2,0,0,1,2,2v5A2,2,0,0,1,17.5,16.5Z" />
			<circle cx={12} cy={12} r={3} />
		</svg>
	);
}
