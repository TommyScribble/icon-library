import React from 'react';

export default function TakingPicturesCircle2(props) {
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
			<title>taking-pictures-circle</title>
			<circle className="a" cx="11.999" cy={12} r="11.25" />
			<path
				className="a"
				d="M15,8.25l-.75-1.5h-4.5L9,8.25H7.5A1.5,1.5,0,0,0,6,9.75v4.5a1.5,1.5,0,0,0,1.5,1.5h9a1.5,1.5,0,0,0,1.5-1.5V9.75a1.5,1.5,0,0,0-1.5-1.5Z"
			/>
			<circle className="a" cx="11.999" cy="11.625" r="1.875" />
		</svg>
	);
}
