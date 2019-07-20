import React from 'react';

export default function Skunk1(props) {
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
			<title>skunk</title>
			<path className="cls-1" d="M8.758,20.685S11,23,12.5,19.5" />
			<path
				className="cls-1"
				d="M13.669,21.281c5.476.257,6.289-2.926,6.408-3.783,1.382-.054,3.423-1.517,3.423-2.5,0-1-2.119-2.5-3.5-2.5-2.792,0-2.437,3.138-2.323,3.423C15.271,16.979,12.5,15.5,12.5,15.5a3.084,3.084,0,0,1,.858-2.253A7.5,7.5,0,1,0,1.8,12.217.385.385,0,0,0,2.5,12c0-3.038,1.962-5.5,5-5.5,6.5,0,1,10.5,1,17"
			/>
			<line className="cls-1" x1="17.5" y1="20.76" x2="17.5" y2="23.5" />
			<path
				className="cls-1"
				d="M13.358,13.247a7.546,7.546,0,0,0,1.11-1.45A5.253,5.253,0,0,0,15,9.5c0-3.314-3.134-6-7-6-4.651,0-8.242,3.888-6.592,8.078"
			/>
			<path
				className="cls-1"
				d="M20.5,14.25a.25.25,0,1,1-.25.25.25.25,0,0,1,.25-.25"
			/>
		</svg>
	);
}
