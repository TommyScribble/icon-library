import React from 'react';

export default function PresentationBoardGraph2(props) {
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
			<title>presentation-board-graph</title>
			<line className="a" x1="11.999" y1="17.25" x2="11.999" y2="20.25" />
			<line className="a" x1="11.999" y1="20.25" x2="8.999" y2="23.25" />
			<line className="a" x1="11.999" y1="20.25" x2="14.999" y2="23.25" />
			<rect
				className="a"
				x="1.499"
				y="0.75"
				width={21}
				height="16.5"
				rx="1.5"
				ry="1.5"
			/>
			<polyline
				className="a"
				points="4.499 9.75 7.499 9.75 8.999 6.75 11.999 12 14.249 8.25 16.499 9.75 19.499 6"
			/>
		</svg>
	);
}
