import React from 'react';

export default function CouponCut(props) {
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
			<title>coupon-cut</title>
			<circle className="cls-1" cx="3.5" cy={19} r={3} />
			<circle className="cls-1" cx="3.5" cy={5} r={3} />
			<line className="cls-1" x1="10.5" y1="17.5" x2={11} y2="17.5" />
			<line className="cls-1" x1="13.012" y1="17.5" x2="14.012" y2="17.502" />
			<line className="cls-1" x1="16.512" y1="17.5" x2="17.512" y2="17.502" />
			<line className="cls-1" x1="20.012" y1="17.5" x2="21.012" y2="17.502" />
			<line className="cls-1" x1={23} y1="17.5" x2="23.5" y2="17.5" />
			<path className="cls-1" d="M10.919,15.5A15.606,15.606,0,0,1,6.5,5" />
			<path
				className="cls-1"
				d="M6.5,19c0-7.826,7.546-17.252,17-12.911L8.358,12,17.5,15.5"
			/>
		</svg>
	);
}
