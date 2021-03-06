import React from 'react';

export default function VideoPlayer1(props) {
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
			<title>video-player-1</title>
			<path
				className="cls-1"
				d="M22.879,5.006a1.026,1.026,0,0,0-.872-.839,75.429,75.429,0,0,0-20.014,0,1.025,1.025,0,0,0-.872.839,39.7,39.7,0,0,0,0,13.988,1.026,1.026,0,0,0,.872.839,75.429,75.429,0,0,0,20.014,0,1.025,1.025,0,0,0,.872-.839A39.7,39.7,0,0,0,22.879,5.006Z"
			/>
			<path
				className="cls-1"
				d="M9.307,8.148a.54.54,0,0,0-.807.468v6.768a.54.54,0,0,0,.807.468l5.921-3.384a.539.539,0,0,0,0-.936Z"
			/>
		</svg>
	);
}
