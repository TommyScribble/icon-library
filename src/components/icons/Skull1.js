import React from 'react';

export default function Skull1(props) {
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
			<title>skull-1</title>
			<path
				className="cls-1"
				d="M12,.5A9.5,9.5,0,0,0,2.5,10v7.5a2,2,0,0,0,2,2v2a2,2,0,0,0,2,2h11a2,2,0,0,0,2-2v-2a2,2,0,0,0,2-2V10A9.5,9.5,0,0,0,12,.5Z"
			/>
			<line className="cls-1" x1={12} y1="23.5" x2={12} y2="19.5" />
			<line className="cls-1" x1={16} y1="23.5" x2={16} y2="19.5" />
			<line className="cls-1" x1={8} y1="23.5" x2={8} y2="19.5" />
			<circle className="cls-1" cx={17} cy={14} r="2.5" />
			<circle className="cls-1" cx={7} cy={14} r="2.5" />
			<path className="cls-1" d="M5.5,6.5v1a3,3,0,0,1-3,3" />
			<path className="cls-1" d="M18.5,6.5v1a3,3,0,0,0,3,3" />
			<path className="cls-1" d="M13,17.5a1,1,0,0,0-2,0" />
		</svg>
	);
}
