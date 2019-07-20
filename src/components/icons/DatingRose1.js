import React from 'react';

export default function DatingRose1(props) {
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
			<title>dating-rose</title>
			<path className="cls-1" d="M5,4.031v4a7,7,0,0,0,14,0v-4" />
			<path
				className="cls-1"
				d="M17,17.031a5,5,0,0,0-5,5A5,5,0,0,0,17,17.031Z"
			/>
			<path className="cls-1" d="M7,17.031a5,5,0,0,1,5,5A5,5,0,0,1,7,17.031Z" />
			<line className="cls-1" x1={12} y1="23.531" x2={12} y2="15.031" />
			<path
				className="cls-1"
				d="M6.822,2.585C2.505,4.229,6.516,6.031,12,6.031c3.866,0,7-.9,7-2,0-4.4-10-4.3-10-2,0,1.733,3.931,1.5,5,1.5"
			/>
		</svg>
	);
}
