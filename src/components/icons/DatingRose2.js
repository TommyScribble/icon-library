import React from 'react';

export default function DatingRose2(props) {
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
			<title>dating-rose</title>
			<line className="a" x1="10.858" y1="23.25" x2="10.858" y2="15.75" />
			<path
				className="a"
				d="M17.8,21.074a5.212,5.212,0,0,1-2.608,1.309A.933.933,0,0,1,14.007,21.2a5.216,5.216,0,0,1,1.309-2.608,5.216,5.216,0,0,1,2.608-1.309.933.933,0,0,1,1.184,1.184A5.212,5.212,0,0,1,17.8,21.074Z"
			/>
			<path
				className="a"
				d="M5.892,3.382c1.195,2.674,4.177,4.167,7.966,3.368v3a4.513,4.513,0,0,1-4.5,4.5H6.89"
			/>
			<path
				className="a"
				d="M9.431,6.576A2.257,2.257,0,0,1,11.608,3.75h0A2.256,2.256,0,0,1,13.858,6V6.75"
			/>
			<path className="a" d="M16.858,9.75a6,6,0,0,1-12,0v-3a6,6,0,0,1,12,0Z" />
		</svg>
	);
}
