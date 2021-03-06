import React from 'react';

export default function Like11(props) {
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
			<title>like-1</title>
			<path
				className="a"
				d="M5.249,21.752a5.954,5.954,0,0,1,1.558.229l3.634,1.038a6,6,0,0,0,1.647.231h4.885a6,6,0,0,0,5.97-5.4l.3-5.1a4.5,4.5,0,0,0-3.4-4.594l-1.455-.318a1.5,1.5,0,0,1-1.136-1.456V3a2.25,2.25,0,1,0-4.5,0V4.554a7.5,7.5,0,0,1-7.5,7.5Z"
			/>
			<rect className="a" x="0.749" y="9.75" width="4.5" height="13.5" />
		</svg>
	);
}
