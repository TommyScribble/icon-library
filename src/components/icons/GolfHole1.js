import React from 'react';

export default function GolfHole1(props) {
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
			<title>golf-hole</title>
			<line className="a" x1="11.249" y1="0.75" x2="11.249" y2="19.5" />
			<path
				className="a"
				d="M11.249,2.25H22.5a.75.75,0,0,1,.576,1.23l-3.4,2.79a.749.749,0,0,0,0,.96l3.4,2.79a.75.75,0,0,1-.576,1.23H11.249"
			/>
			<path
				className="a"
				d="M14.239,15.9c4.343.46,7.51,1.9,7.51,3.6,0,2.071-4.7,3.75-10.5,3.75S.749,21.571.749,19.5c0-1.669,3.054-3.084,7.276-3.57"
			/>
		</svg>
	);
}
