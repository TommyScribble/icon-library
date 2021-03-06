import React from 'react';

export default function DesignToolPenStation(props) {
	return (
		<svg
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
							'.a{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}',
					}}
				/>
			</defs>
			<title>design-tool-pen-station</title>
			<path
				className="a"
				d="M2.16.781c2.6,2.328,1.972,1.388,3.321,2.257a2.159,2.159,0,0,1,.782.928A2.248,2.248,0,0,1,2.16,5.8,5.675,5.675,0,0,1,2.16.781Z"
			/>
			<line className="a" x1="4.225" y1="7.132" x2="5.155" y2="9.773" />
			<path
				className="a"
				d="M11.9,23.26h-4.5a4.5,4.5,0,0,1-4.5-4.5V9.773H16.4v8.991A4.5,4.5,0,0,1,11.9,23.26Z"
			/>
			<path
				className="a"
				d="M17.9,18.764H16.4V9.773h1.5a4.5,4.5,0,0,1,4.5,4.5h0A4.5,4.5,0,0,1,17.9,18.764Z"
			/>
			<line className="a" x1="6.234" y1="5.864" x2="8.66" y2="9.773" />
			<polyline
				className="a"
				points="9.636 9.773 11.657 4.046 15.061 0.76 15.647 5.455 14.123 9.773"
			/>
			<path className="a" d="M15.413,6.12a3.53,3.53,0,0,1-3.991-1.409" />
		</svg>
	);
}
