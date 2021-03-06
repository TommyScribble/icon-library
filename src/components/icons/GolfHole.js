import React from 'react';

export default function GolfHole(props) {
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
			<title>golf-hole</title>
			<line className="cls-1" x1={10} y1="0.5" x2={10} y2="20.5" />
			<ellipse className="cls-1" cx={10} cy={21} rx={7} ry="2.5" />
			<path
				className="cls-1"
				d="M10,1.5H20.5a.5.5,0,0,1,.354.854L17.706,5.5l3.147,3.146A.5.5,0,0,1,20.5,9.5H10"
			/>
		</svg>
	);
}
