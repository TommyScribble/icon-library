import React from 'react';

export default function ShopCashierMan2(props) {
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
			<title>shop-cashier-man</title>
			<path
				className="a"
				d="M8.444,2.781a6.849,6.849,0,0,0,4.93,2.094,6.851,6.851,0,0,0,2.713-.558"
			/>
			<circle className="a" cx="11.999" cy="4.875" r="4.125" />
			<path className="a" d="M18.749,15.75a6.964,6.964,0,0,0-13.5,0" />
			<path
				className="a"
				d="M21.749,23.25v-3a1.5,1.5,0,0,0-1.5-1.5H3.749a1.5,1.5,0,0,0-1.5,1.5v3"
			/>
			<line className="a" x1="11.999" y1="10.5" x2="11.999" y2="15.75" />
		</svg>
	);
}
