import React from 'react';

export default function GaugeDashboard11(props) {
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
			<title>gauge-dashboard-1</title>
			<path className="a" d="M9,15.285V15a3,3,0,0,1,6,0v.285" />
			<line className="a" x1="14.251" y1="5.25" x2="12.001" y2={12} />
			<path d="M4.876,10.5A1.125,1.125,0,1,0,6,11.625,1.125,1.125,0,0,0,4.876,10.5Z" />
			<path d="M6.376,6.75A1.125,1.125,0,1,0,7.5,7.875,1.125,1.125,0,0,0,6.376,6.75Z" />
			<path d="M19.126,10.5a1.125,1.125,0,1,0,1.125,1.125A1.125,1.125,0,0,0,19.126,10.5Z" />
			<path d="M17.626,6.75a1.125,1.125,0,1,0,1.125,1.125A1.125,1.125,0,0,0,17.626,6.75Z" />
			<path d="M9.376,3.75A1.125,1.125,0,1,0,10.5,4.875,1.125,1.125,0,0,0,9.376,3.75Z" />
			<path className="a" d="M21.43,18.135a15.753,15.753,0,0,0-18.862,0" />
			<circle className="a" cx="11.999" cy={12} r="11.25" />
		</svg>
	);
}
