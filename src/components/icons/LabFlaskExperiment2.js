import React from 'react';

export default function LabFlaskExperiment2(props) {
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
			<title>lab-flask-experiment</title>
			<path
				className="cls-1"
				d="M9.5,3.5v8L4.7,19.354A2,2,0,0,0,6.342,22.5H17.658A2,2,0,0,0,19.3,19.354L14.5,11.5v-8"
			/>
			<path
				className="cls-1"
				d="M16.5,2.5a1,1,0,0,1-1,1h-7a1,1,0,0,1,0-2h7A1,1,0,0,1,16.5,2.5Z"
			/>
			<line className="cls-1" x1="14.5" y1="5.5" x2="12.5" y2="5.5" />
			<line className="cls-1" x1="14.5" y1="9.5" x2="12.5" y2="9.5" />
			<line className="cls-1" x1="14.5" y1="7.5" x2="11.5" y2="7.5" />
			<line className="cls-1" x1="7.057" y1="15.5" x2="16.943" y2="15.5" />
			<circle className="cls-1" cx="9.5" cy={19} r="1.5" />
			<path
				className="cls-1"
				d="M15.5,20.25a.25.25,0,1,1-.25.25.25.25,0,0,1,.25-.25"
			/>
			<path
				className="cls-1"
				d="M13.5,17.25a.25.25,0,1,1-.25.25.25.25,0,0,1,.25-.25"
			/>
		</svg>
	);
}
