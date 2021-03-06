import React from 'react';

export default function ShopCashierMan(props) {
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
			<title>shop-cashier-man</title>
			<path className="cls-1" d="M1,23V20a2,2,0,0,1,2-2H21a2,2,0,0,1,2,2v3" />
			<path
				className="cls-1"
				d="M8.35,3.105A7.054,7.054,0,0,0,13.417,5.25a7.056,7.056,0,0,0,2.776-.567"
			/>
			<circle className="cls-1" cx={12} cy="5.25" r="4.25" />
			<path
				className="cls-1"
				d="M11.5,11.018l-.936,4.214a.5.5,0,0,0,.134.462l.952.952a.5.5,0,0,0,.708,0l.952-.952a.5.5,0,0,0,.134-.462L12.5,11.018"
			/>
			<path className="cls-1" d="M18.706,16A7,7,0,0,0,5.294,16" />
		</svg>
	);
}
