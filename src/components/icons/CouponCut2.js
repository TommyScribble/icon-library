import React from 'react';

export default function CouponCut2(props) {
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
			<title>coupon-cut</title>
			<circle className="a" cx="4.499" cy="19.5" r="3.75" />
			<circle className="a" cx="4.499" cy="4.5" r="3.75" />
			<line className="a" x1="12.995" y1="14.024" x2="2.881" y2="7.884" />
			<line className="a" x1="23.249" y1="3.75" x2="2.881" y2="16.116" />
			<line className="a" x1="23.249" y1="17.25" x2="21.749" y2="17.25" />
			<line className="a" x1="18.749" y1="17.25" x2="17.249" y2="17.25" />
			<line className="a" x1="14.249" y1="17.25" x2="12.749" y2="17.25" />
		</svg>
	);
}
