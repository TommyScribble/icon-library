import React from 'react';

export default function VideoPlayer12(props) {
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
			<title>video-player-1</title>
			<rect
				className="a"
				x="0.749"
				y="0.75"
				width="22.5"
				height="22.5"
				rx="1.5"
				ry="1.5"
			/>
			<path
				className="a"
				d="M10.238,15.66A.857.857,0,0,1,9,14.894V9.106a.857.857,0,0,1,1.239-.766l5.788,2.895a.855.855,0,0,1,0,1.53Z"
			/>
		</svg>
	);
}
