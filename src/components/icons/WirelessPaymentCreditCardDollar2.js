import React from 'react';

export default function WirelessPaymentCreditCardDollar2(props) {
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
			<title>wireless-payment-credit-card-dollar</title>
			<path
				className="a"
				d="M6.749,23.25h-4.5a1.5,1.5,0,0,1-1.5-1.5V2.25a1.5,1.5,0,0,1,1.5-1.5h10.5a1.5,1.5,0,0,1,1.5,1.5v9"
			/>
			<line className="a" x1="0.749" y1="19.5" x2="6.749" y2="19.5" />
			<rect
				className="a"
				x="9.749"
				y="14.25"
				width="13.5"
				height={9}
				rx="1.5"
				ry="1.5"
			/>
			<line className="a" x1="9.749" y1="17.25" x2="23.249" y2="17.25" />
			<line className="a" x1="12.749" y1="20.25" x2="14.999" y2="20.25" />
		</svg>
	);
}