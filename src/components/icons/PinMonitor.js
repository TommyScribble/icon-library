import React from 'react';

export default function PinMonitor(props) {
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
			<title>pin-monitor</title>
			<path className="a" d="M21.749,15v.75h-21V5.25a1.5,1.5,0,0,1,1.5-1.5h9" />
			<path
				className="a"
				d="M21.749,15.75v3a1.5,1.5,0,0,1-1.5,1.5h-18a1.5,1.5,0,0,1-1.5-1.5v-3"
			/>
			<path d="M18.749,4.125A1.125,1.125,0,1,0,19.874,5.25a1.125,1.125,0,0,0-1.125-1.125Z" />
			<path
				className="a"
				d="M18.749.75a4.5,4.5,0,0,1,4.5,4.5c0,1.921-2.688,5.577-3.909,7.138a.75.75,0,0,1-1.182,0c-1.221-1.562-3.909-5.217-3.909-7.138A4.5,4.5,0,0,1,18.749.75Z"
			/>
			<path d="M11.249,16.875A1.125,1.125,0,1,0,12.374,18a1.125,1.125,0,0,0-1.125-1.125Z" />
			<line className="a" x1="11.249" y1="20.25" x2="11.249" y2="23.25" />
			<line className="a" x1="5.999" y1="23.25" x2="15.749" y2="23.25" />
			<line className="a" x1="9.749" y1="3.75" x2="0.749" y2="12.75" />
			<line className="a" x1="5.999" y1="7.5" x2="14.249" y2="15.75" />
		</svg>
	);
}
