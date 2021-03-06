import React from 'react';

export default function PresentationBoardGraph(props) {
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
			<title>presentation-board-graph</title>
			<rect
				className="cls-1"
				x="0.5"
				y="0.5"
				width={23}
				height={15}
				rx={1}
				ry={1}
			/>
			<line className="cls-1" x1="11.5" y1="15.5" x2="11.5" y2="18.91" />
			<path
				className="cls-1"
				d="M6.5,23.5l4.293-4.293a1,1,0,0,1,1.414,0L16.5,23.5"
			/>
			<path
				className="cls-1"
				d="M.5,8.5H6.17a.5.5,0,0,0,.46-.3L7.517,6.13a.5.5,0,0,1,.926.018l1.67,4.343a.5.5,0,0,0,.906.06l2.073-3.8a.5.5,0,0,1,.863-.026L15.507,9.21a.5.5,0,0,0,.88-.058L18.5,4.5"
			/>
		</svg>
	);
}
