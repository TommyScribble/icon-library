import React from 'react';

export default function DietWaist11(props) {
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
			<title>diet-waist-1</title>
			<line className="cls-1" x1={12} y1="23.5" x2={12} y2={20} />
			<path
				className="cls-1"
				d="M5.415.5l.54,2.6A9.386,9.386,0,0,1,4.41,10.151C2.67,12.7,2.2,15.874,2.669,19.5l.831,4"
			/>
			<path
				className="cls-1"
				d="M20.5,23.5l.831-4c.465-3.626,0-6.8-1.741-9.349A9.386,9.386,0,0,1,18.045,3.1L18.585.5"
			/>
			<line className="cls-1" x1="0.5" y1="6.5" x2={4} y2="6.5" />
			<polyline className="cls-1" points="3 5 4 6.5 3 8" />
			<line className="cls-1" x1="23.5" y1="6.5" x2={20} y2="6.5" />
			<polyline className="cls-1" points="21 5 20 6.5 21 8" />
			<path
				className="cls-1"
				d="M2.7,14.5C5.835,14.661,12,20,12,20s6.165-5.339,9.3-5.5Z"
			/>
			<path
				className="cls-1"
				d="M12,10.25a.25.25,0,1,1-.25.25.25.25,0,0,1,.25-.25"
			/>
		</svg>
	);
}
