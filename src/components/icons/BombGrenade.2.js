import React from 'react';

export default function BombGrenade2(props) {
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
			<title>bomb-grenade</title>
			<path
				className="a"
				d="M15.9,22.875a1.455,1.455,0,0,0,1.237-.648,11.788,11.788,0,0,0,1.99-6.852,11.788,11.788,0,0,0-1.99-6.852A1.455,1.455,0,0,0,15.9,7.875H8.851a1.455,1.455,0,0,0-1.237.648,11.788,11.788,0,0,0-1.99,6.852,11.788,11.788,0,0,0,1.99,6.852,1.455,1.455,0,0,0,1.237.648Z"
			/>
			<rect className="a" x="10.124" y="3.375" width="4.5" height="4.5" />
			<path className="a" d="M1.874,15.374c0-8.25,4.5-12,4.5-12h11.25" />
			<circle className="a" cx="19.874" cy="3.375" r="2.25" />
			<line className="a" x1="5.939" y1="12.375" x2="18.809" y2="12.375" />
			<line className="a" x1="5.939" y1="18.375" x2="18.81" y2="18.375" />
		</svg>
	);
}
