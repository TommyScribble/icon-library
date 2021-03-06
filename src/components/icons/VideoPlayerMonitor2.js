import React from 'react';

export default function VideoPlayerMonitor2(props) {
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
			<title>video-player-monitor</title>
			<path
				className="a"
				d="M15.749.75h4.5a1.5,1.5,0,0,1,1.5,1.5v10.5a1.5,1.5,0,0,1-1.5,1.5H3.749a1.5,1.5,0,0,1-1.5-1.5V2.25a1.5,1.5,0,0,1,1.5-1.5h3"
			/>
			<path
				className="a"
				d="M20.766,22.318a.749.749,0,0,1-.727.932H3.96a.75.75,0,0,1-.728-.932l1.125-4.5a.751.751,0,0,1,.728-.568H18.914a.749.749,0,0,1,.727.568Z"
			/>
			<line className="a" x1="2.249" y1="11.25" x2="21.749" y2="11.25" />
			<line className="a" x1="6.749" y1="20.25" x2="8.249" y2="20.25" />
			<line className="a" x1="15.749" y1="20.25" x2="17.249" y2="20.25" />
			<line className="a" x1="11.249" y1="20.25" x2="12.749" y2="20.25" />
			<path
				className="a"
				d="M10.923,2.331a.853.853,0,0,0-.789.033.759.759,0,0,0-.385.652V6.734a.76.76,0,0,0,.385.652.855.855,0,0,0,.79.033l3.488-1.647a.979.979,0,0,0,0-1.794Z"
			/>
		</svg>
	);
}
