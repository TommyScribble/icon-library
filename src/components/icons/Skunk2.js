import React from 'react';

export default function Skunk2(props) {
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
			<title>skunk</title>
			<path className="a" d="M7.5,18.375a13.127,13.127,0,0,0-.75,3.75" />
			<line className="a" x1="17.199" y1="18.925" x2="17.999" y2="22.125" />
			<path
				className="a"
				d="M23.249,11.625c0-1.5-2.406-2.25-4.219-2.25a3.15,3.15,0,0,0-3.281,3,2.812,2.812,0,0,0,.621,1.745c-2.447.335-5.121.007-5.121-.995,0-1.5,1.5-1.5,1.5-5.25a6,6,0,1,0-10.684,3.75S2.213,6.584,6,7.125c5.25.75,1.5,11.25,1.5,11.25s.75,1.5,6,1.5c4,0,5.382-2.172,5.818-4.532C21.087,15.176,23.249,12.375,23.249,11.625Z"
			/>
			<path d="M19.124,10.875A1.125,1.125,0,1,0,20.249,12a1.125,1.125,0,0,0-1.125-1.125Z" />
			<path className="a" d="M4.5,7.233a7.491,7.491,0,0,1,4.907-.612" />
			<path
				className="a"
				d="M16.727,10.239l-.228-.114a1.642,1.642,0,0,1-.75-2.25"
			/>
		</svg>
	);
}