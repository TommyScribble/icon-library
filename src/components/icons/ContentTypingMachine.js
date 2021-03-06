import React from 'react';

export default function ContentTypingMachine(props) {
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
			<title>content-typing-machine</title>
			<path
				className="a"
				d="M18.932,15.75h1.317a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5H3.749a1.5,1.5,0,0,0-1.5,1.5v3a1.5,1.5,0,0,0,1.5,1.5H5.067"
			/>
			<path
				className="a"
				d="M5.249,1.5A.75.75,0,0,1,6,.75H18a.75.75,0,0,1,.75.75V9.75H5.249Z"
			/>
			<line className="a" x1="21.749" y1="12.75" x2="23.249" y2="12.75" />
			<line className="a" x1="0.749" y1="12.75" x2="2.249" y2="12.75" />
			<path d="M15.749,18.75a1.125,1.125,0,1,0,1.125,1.125,1.125,1.125,0,0,0-1.125-1.125Z" />
			<path d="M8.249,18.75a1.125,1.125,0,1,0,1.125,1.125A1.125,1.125,0,0,0,8.249,18.75Z" />
			<path d="M12,18.75a1.125,1.125,0,1,0,1.125,1.125A1.125,1.125,0,0,0,12,18.75Z" />
			<path
				className="a"
				d="M17.379,14.25h-3.13a2.25,2.25,0,0,1-4.5,0H6.619c-1.178,0-1.124.274-3.614,6.978A1.5,1.5,0,0,0,4.412,23.25H19.586a1.5,1.5,0,0,0,1.407-2.022C18.505,14.529,18.557,14.25,17.379,14.25Z"
			/>
			<line className="a" x1="8.999" y1="6.75" x2="14.999" y2="6.75" />
			<line className="a" x1="8.999" y1="3.75" x2="12.749" y2="3.75" />
		</svg>
	);
}
