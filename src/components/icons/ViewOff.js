import React from 'react';

export default function ViewOff(props) {
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
			<title>view-off</title>
			<path
				className="cls-1"
				d="M19.518,8.288A22.111,22.111,0,0,1,23.5,12S18.352,18.5,12,18.5a10.3,10.3,0,0,1-3-.464"
			/>
			<path
				className="cls-1"
				d="M4.468,15.7A22.105,22.105,0,0,1,.5,12S5.648,5.5,12,5.5a10.106,10.106,0,0,1,2.5.325"
			/>
			<path className="cls-1" d="M8,12a4,4,0,0,1,4-4" />
			<path className="cls-1" d="M16,12a4,4,0,0,1-4,4" />
			<line className="cls-1" x1="21.75" y1="2.25" x2="2.25" y2="21.75" />
		</svg>
	);
}
