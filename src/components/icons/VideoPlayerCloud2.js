import React from 'react';

export default function VideoPlayerCloud2(props) {
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
			<title>video-player-cloud</title>
			<rect
				className="a"
				x="4.499"
				y="10.5"
				width="12.75"
				height="12.75"
				rx="0.639"
				ry="0.639"
			/>
			<path
				className="a"
				d="M1.453,12a4.646,4.646,0,0,1-.7-2.574A4.851,4.851,0,0,1,5.816,4.616,6.858,6.858,0,0,1,18.826,7.1a3.655,3.655,0,0,1,4.423,3.539,3.349,3.349,0,0,1-2.79,3.47"
			/>
			<path
				className="a"
				d="M9.423,14.331a.853.853,0,0,0-.789.033.759.759,0,0,0-.385.652v3.718a.76.76,0,0,0,.385.652.855.855,0,0,0,.79.033l3.488-1.647a.979.979,0,0,0,0-1.794Z"
			/>
		</svg>
	);
}
