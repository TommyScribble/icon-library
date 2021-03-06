import React from 'react';

export default function LaptopSmiley11(props) {
	return (
		<svg
			id="Light"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			{...props}
		>
			<defs>
				<style
					dangerouslySetInnerHTML={{
						__html:
							'.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;}',
					}}
				/>
			</defs>
			<title>laptop-smiley-1</title>
			<path
				className="cls-1"
				d="M8.5,16.5c0,1.105,1.567,2,3.5,2s3.5-.895,3.5-2h5V5.167A1.667,1.667,0,0,0,18.833,3.5H5.167A1.667,1.667,0,0,0,3.5,5.167V16.5Z"
			/>
			<path
				className="cls-1"
				d="M15.5,16.5c0,1.105-1.567,2-3.5,2s-3.5-.895-3.5-2H.5a5.281,5.281,0,0,0,5.123,4H18.377a5.281,5.281,0,0,0,5.123-4Z"
			/>
			<line className="cls-1" x1="9.5" y1="7.5" x2="9.5" y2="9.5" />
			<line className="cls-1" x1="14.5" y1="7.5" x2="14.5" y2="9.5" />
			<path className="cls-1" d="M16,12a6.083,6.083,0,0,1-8,0" />
		</svg>
	);
}
