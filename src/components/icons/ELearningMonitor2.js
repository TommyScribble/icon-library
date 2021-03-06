import React from 'react';

export default function ELearningMonitor2(props) {
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
			<title>e-learning-monitor</title>
			<rect
				className="a"
				x="0.749"
				y="0.75"
				width="22.5"
				height={18}
				rx="1.5"
				ry="1.5"
			/>
			<polygon
				className="a"
				points="15.749 23.25 8.249 23.25 8.999 18.75 14.999 18.75 15.749 23.25"
			/>
			<line className="a" x1="5.999" y1="23.25" x2="17.999" y2="23.25" />
			<line className="a" x1="18.749" y1="7.5" x2="18.749" y2="9.75" />
			<path
				className="a"
				d="M15.749,8.833V12.75a5.683,5.683,0,0,1-3.742,1.5,5.746,5.746,0,0,1-3.758-1.5V8.833"
			/>
			<polygon
				className="a"
				points="5.249 7.5 11.999 10.5 18.749 7.5 11.999 4.5 5.249 7.5"
			/>
		</svg>
	);
}
