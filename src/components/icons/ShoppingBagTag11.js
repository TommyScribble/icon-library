import React from 'react';

export default function ShoppingBagTag11(props) {
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
			<title>shopping-bag-tag-1</title>
			<rect
				className="cls-1"
				x="1.378"
				y="8.5"
				width={19}
				height={15}
				rx={1}
				ry={1}
			/>
			<path className="cls-1" d="M6.378,6.5V5a4.5,4.5,0,0,1,9,0V6.5" />
			<path
				className="cls-1"
				d="M20.208,1.55a1,1,0,0,1,1.414,0l.707.708a1,1,0,0,1,0,1.414L19.794,6.207a1,1,0,0,1-.707.293H17.378V4.793a1,1,0,0,1,.293-.707Z"
			/>
		</svg>
	);
}
