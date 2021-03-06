import React from 'react';

export default function Rooster2(props) {
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
			<title>rooster</title>
			<path
				className="cls-1"
				d="M12.25,11.25a.25.25,0,1,1-.25.25.25.25,0,0,1,.25-.25"
			/>
			<polyline
				className="cls-1"
				points="15.25 15.5 20.75 15.5 14.936 10.581"
			/>
			<path className="cls-1" d="M17.25,15.5s2,4-.5,4h-1.5" />
			<path
				className="cls-1"
				d="M9.25,22a1.5,1.5,0,0,1-3,0,1.5,1.5,0,0,1-3,0V12.5a6,6,0,0,1,12,0V22a1.5,1.5,0,0,1-3,0,1.5,1.5,0,0,1-3,0Z"
			/>
			<path
				className="cls-1"
				d="M13.5,8.267,15.033,3.8A2,2,0,1,0,11.25,2.5a2,2,0,0,0-4,0A2,2,0,1,0,3.467,3.8L5,8.267"
			/>
		</svg>
	);
}
