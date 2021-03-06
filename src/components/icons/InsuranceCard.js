import React from 'react';

export default function InsuranceCard(props) {
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
			<title>insurance-card</title>
			<rect
				className="a"
				x="0.749"
				y={3}
				width="22.5"
				height={18}
				rx="1.5"
				ry="1.5"
			/>
			<line className="a" x1="0.749" y1="7.5" x2="23.249" y2="7.5" />
			<line className="a" x1="20.249" y1={12} x2="14.249" y2={12} />
			<line className="a" x1="17.249" y1="16.5" x2="14.249" y2="16.5" />
			<line className="a" x1="7.499" y1="11.25" x2="7.499" y2="17.25" />
			<line className="a" x1="4.499" y1="14.25" x2="10.499" y2="14.25" />
		</svg>
	);
}
