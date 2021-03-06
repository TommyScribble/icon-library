import React from 'react';

export default function Lighter2(props) {
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
			<title>lighter</title>
			<path
				className="a"
				d="M20.249,23.25H9.749a1.5,1.5,0,0,1-1.5-1.5v-7.5h13.5v7.5A1.5,1.5,0,0,1,20.249,23.25Z"
			/>
			<path
				className="a"
				d="M2.249,12.75V2.25a1.5,1.5,0,0,1,1.5-1.5h4.5v13.5h-4.5A1.5,1.5,0,0,1,2.249,12.75Z"
			/>
			<path
				className="a"
				d="M15.284,1.871a3.742,3.742,0,0,1,.379,4.263A1.332,1.332,0,0,1,14.242,5,3.013,3.013,0,0,0,12.678,7.84a3.411,3.411,0,0,0,3.411,3.41A3.457,3.457,0,0,0,19.5,7.84,5.67,5.67,0,0,0,15.284,1.871Z"
			/>
			<rect className="a" x="12.749" y="11.25" width={6} height={3} />
		</svg>
	);
}
