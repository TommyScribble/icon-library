import React from 'react';

export default function Screen12(props) {
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
			<title>screen-1</title>
			<rect
				className="cls-1"
				x="0.5"
				y={3}
				width={23}
				height={15}
				rx={1}
				ry={1}
			/>
			<line className="cls-1" x1="6.489" y1={21} x2="17.489" y2={21} />
			<line className="cls-1" x1="10.5" y1={18} x2="10.5" y2={21} />
			<line className="cls-1" x1="13.5" y1={18} x2="13.5" y2={21} />
		</svg>
	);
}
