import React from 'react';

export default function HeadphonesHuman(props) {
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
			<title>headphones-human</title>
			<path
				className="cls-1"
				d="M10.1,1.578c-4.865.61-9,4.708-9,9.672a9.725,9.725,0,0,0,4,7.861V23.5"
			/>
			<path
				className="cls-1"
				d="M15.1,23.5v-2h2a3,3,0,0,0,3-3v-3h2.311a.5.5,0,0,0,.474-.654C20.97,8.932,19.6,2.571,13.1,1.621"
			/>
			<rect
				className="cls-1"
				x="10.095"
				y="0.5"
				width={3}
				height={9}
				rx={1}
				ry={1}
				transform="translate(23.19 10) rotate(-180)"
			/>
			<circle className="cls-1" cx="11.595" cy={13} r="1.5" />
			<path className="cls-1" d="M10.125,8.745a4.5,4.5,0,1,0,2.939,0" />
		</svg>
	);
}
