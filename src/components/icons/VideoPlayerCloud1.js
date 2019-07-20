import React from 'react';

export default function VideoPlayerCloud1(props) {
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
			<title>video-player-cloud</title>
			<path
				className="cls-1"
				d="M10.894,14.447A.618.618,0,0,0,10,15v3a.618.618,0,0,0,.895.553l2.658-1.329a.81.81,0,0,0,0-1.448Z"
			/>
			<path
				className="cls-1"
				d="M20.5,13.406A4.312,4.312,0,0,0,23,9.357a4.711,4.711,0,0,0-4.954-4.635A6.707,6.707,0,0,0,12,1,6.605,6.605,0,0,0,5.325,7.109,3.561,3.561,0,0,0,1,10.518,3.186,3.186,0,0,0,3.5,13.8"
			/>
			<rect
				className="cls-1"
				x={6}
				y={10}
				width={12}
				height={13}
				rx={1}
				ry={1}
			/>
			<line className="cls-1" x1={8} y1={12} x2={9} y2={12} />
			<line className="cls-1" x1={15} y1={12} x2={16} y2={12} />
			<line className="cls-1" x1="11.5" y1={12} x2="12.5" y2={12} />
			<line className="cls-1" x1={8} y1={21} x2={9} y2={21} />
			<line className="cls-1" x1={15} y1={21} x2={16} y2={21} />
			<line className="cls-1" x1="11.5" y1={21} x2="12.5" y2={21} />
		</svg>
	);
}
