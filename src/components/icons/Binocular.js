import React from 'react';

export default function Binocular(props) {
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
			<title>binocular</title>
			<circle className="cls-1" cx="5.5" cy="17.531" r={5} />
			<path
				className="cls-1"
				d="M10.5,6.031v-4a2.281,2.281,0,0,0-3,0l-1.5,4-1.5,1.5-3,7"
			/>
			<circle className="cls-1" cx="18.5" cy="17.531" r={5} />
			<path
				className="cls-1"
				d="M13.5,6.031V2.094a2.281,2.281,0,0,1,3,0L18,6.031l1.5,1.5,3,7"
			/>
			<path className="cls-1" d="M8,10.031c0-1.1,1.791-2,4-2s4,.9,4,2" />
			<line className="cls-1" x1="10.5" y1="17.531" x2="10.5" y2="8.177" />
			<line className="cls-1" x1="13.5" y1="17.531" x2="13.5" y2="8.177" />
		</svg>
	);
}
