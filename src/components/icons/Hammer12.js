import React from 'react';

export default function Hammer12(props) {
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
			<title>hammer-1</title>
			<path
				className="a"
				d="M11.166,13.351A3.713,3.713,0,0,1,16.416,8.1l4.726,4.726a3.712,3.712,0,0,1,0,5.25l-2.1-2.1a3.979,3.979,0,0,0-5.251,0Z"
			/>
			<rect
				className="a"
				x="5.897"
				y="0.975"
				width="3.713"
				height="7.425"
				transform="translate(5.586 -4.109) rotate(45)"
			/>
			<line className="a" x1="10.641" y1="4.425" x2="13.266" y2="7.05" />
			<line className="a" x1="7.491" y1="7.575" x2="10.116" y2="10.201" />
			<path
				className="a"
				d="M10.34,12.077,2.308,20.108a1.841,1.841,0,1,0,2.6,2.6L12.719,14.9"
			/>
		</svg>
	);
}
