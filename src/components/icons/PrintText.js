import React from 'react';

export default function PrintText(props) {
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
			<title>print-text</title>
			<line className="cls-1" x1="7.5" y1="19.5" x2="16.5" y2="19.5" />
			<line className="cls-1" x1="7.5" y1="16.5" x2="16.5" y2="16.5" />
			<path
				className="cls-1"
				d="M5.5,16.5h-3a2.006,2.006,0,0,1-2-2v-6a2.005,2.005,0,0,1,2-2h19a2.005,2.005,0,0,1,2,2v6a2.006,2.006,0,0,1-2,2h-3"
			/>
			<path
				className="cls-1"
				d="M5.5,4.5V.5h9.586a1,1,0,0,1,.707.293l2.414,2.414a1,1,0,0,1,.293.707V4.5"
			/>
			<path
				className="cls-1"
				d="M18.5,22.5a1,1,0,0,1-1,1H6.5a1,1,0,0,1-1-1v-9h13Z"
			/>
			<path className="cls-1" d="M3.5,8.5a1,1,0,1,1-1,1,1,1,0,0,1,1-1" />
			<polyline className="cls-1" points="14.5 0.5 14.5 4.5 18.5 4.5" />
		</svg>
	);
}
