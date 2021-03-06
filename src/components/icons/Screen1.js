import React from 'react';

export default function Screen1(props) {
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
			<title>screen-1</title>
			<polygon
				className="a"
				points="15.749 23.25 8.249 23.25 8.999 18.75 14.999 18.75 15.749 23.25"
			/>
			<line className="a" x1="5.999" y1="23.25" x2="17.999" y2="23.25" />
			<line className="a" x1="0.749" y1="15.75" x2="23.249" y2="15.75" />
			<rect
				className="a"
				x="0.749"
				y="0.75"
				width="22.5"
				height={18}
				rx={3}
				ry={3}
			/>
		</svg>
	);
}
