import React from 'react';

export default function LoveBoat(props) {
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
			<title>love-boat</title>
			<line className="a" x1="0.749" y1="10.5" x2="0.749" y2="23.25" />
			<line className="a" x1="23.249" y1="14.25" x2="23.249" y2="23.25" />
			<line className="a" x1="23.249" y1="19.5" x2="0.749" y2="19.5" />
			<circle className="a" cx="5.999" cy="14.25" r="2.25" />
			<path
				className="a"
				d="M11.249,16.5V12.961a.75.75,0,0,1,.932-.728L18.066,13.7a2.883,2.883,0,0,1,2.183,2.8Z"
			/>
			<path
				className="a"
				d="M23.19,6.266a1.9,1.9,0,0,0-2.381-1.38l-1.631.464-.409-1.645a1.9,1.9,0,0,0-2.38-1.38,2.061,2.061,0,0,0-1.427,2.462l1.219,4.9a.578.578,0,0,0,.724.419l4.859-1.381A2.061,2.061,0,0,0,23.19,6.266Z"
			/>
			<path
				className="a"
				d="M10.312,1.058a1.9,1.9,0,0,0-2.678.632L6.767,3.148,5.34,2.232a1.9,1.9,0,0,0-2.678.633,2.059,2.059,0,0,0,.654,2.768L7.568,8.36a.579.579,0,0,0,.815-.193l2.583-4.341A2.059,2.059,0,0,0,10.312,1.058Z"
			/>
		</svg>
	);
}
