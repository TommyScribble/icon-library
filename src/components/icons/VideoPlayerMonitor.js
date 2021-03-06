import React from 'react';

export default function VideoPlayerMonitor(props) {
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
			<title>video-player-monitor</title>
			<path
				className="cls-1"
				d="M14.53,6.671a.714.714,0,0,0,0-1.342L9.97,3.671A.35.35,0,0,0,9.5,4V8a.35.35,0,0,0,.47.329Z"
			/>
			<rect
				className="cls-1"
				x="1.5"
				y="0.5"
				width={21}
				height={14}
				rx={1}
				ry={1}
			/>
			<path
				className="cls-1"
				d="M21.845,22.879a.5.5,0,0,1-.485.621H2.64a.5.5,0,0,1-.485-.621l1.25-5A.5.5,0,0,1,3.89,17.5H20.11a.5.5,0,0,1,.485.379Z"
			/>
			<line className="cls-1" x1="1.5" y1="11.5" x2="22.5" y2="11.5" />
			<line className="cls-1" x1="5.5" y1="19.5" x2="6.5" y2="19.5" />
			<line className="cls-1" x1="8.5" y1="19.5" x2="9.5" y2="19.5" />
			<line className="cls-1" x1="11.5" y1="19.5" x2="12.5" y2="19.5" />
			<line className="cls-1" x1="14.5" y1="19.5" x2="15.5" y2="19.5" />
			<line className="cls-1" x1="17.5" y1="19.5" x2="18.5" y2="19.5" />
			<line className="cls-1" x1="4.5" y1="21.5" x2="5.5" y2="21.5" />
			<line className="cls-1" x1="7.5" y1="21.5" x2="16.5" y2="21.5" />
			<line className="cls-1" x1="18.5" y1="21.5" x2="19.5" y2="21.5" />
		</svg>
	);
}
