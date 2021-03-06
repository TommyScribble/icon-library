import React from 'react';

export default function PinMonitor1(props) {
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
			<title>pin-monitor</title>
			<path className="cls-1" d="M11.931,20.5a3,3,0,0,0,1.191,2.614l.24.386" />
			<path className="cls-1" d="M7.638,23.5l.24-.386A3,3,0,0,0,9.069,20.5" />
			<line className="cls-1" x1="5.9" y1="23.5" x2="15.1" y2="23.5" />
			<line className="cls-1" x1="0.5" y1="17.5" x2="20.5" y2="17.5" />
			<path
				className="cls-1"
				d="M20.5,13.5v6a1,1,0,0,1-1,1H1.5a1,1,0,0,1-1-1V7.5a1,1,0,0,1,1-1h12"
			/>
			<path
				className="cls-1"
				d="M19.5.5a4,4,0,0,1,4,4c0,1.781-2.6,5.241-3.608,6.514a.5.5,0,0,1-.784,0C18.1,9.74,15.5,6.281,15.5,4.5A4,4,0,0,1,19.5.5Z"
			/>
			<circle className="cls-1" cx="19.5" cy="4.5" r="1.5" />
		</svg>
	);
}
