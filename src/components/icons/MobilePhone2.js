import React from 'react';

export default function MobilePhone2(props) {
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
			<title>mobile-phone-2</title>
			<rect
				className="a"
				x="5.249"
				y="0.75"
				width="13.5"
				height="22.5"
				rx={3}
				ry={3}
			/>
			<line className="a" x1="5.249" y1="18.75" x2="18.749" y2="18.75" />
		</svg>
	);
}
