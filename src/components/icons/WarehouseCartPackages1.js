import React from 'react';

export default function WarehouseCartPackages1(props) {
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
			<title>warehouse-cart-packages</title>
			<path
				className="a"
				d="M.749,16.5H16.707a1.5,1.5,0,0,0,1.484-1.277L20.058,2.777A1.5,1.5,0,0,1,21.541,1.5h1.708"
			/>
			<rect
				className="a"
				x="2.249"
				y="7.5"
				width={6}
				height={6}
				rx="0.75"
				ry="0.75"
			/>
			<rect
				className="a"
				x="8.249"
				y="4.5"
				width="7.5"
				height={9}
				rx="0.75"
				ry="0.75"
			/>
			<circle className="a" cx="4.124" cy="20.625" r="1.875" />
			<circle className="a" cx="14.624" cy="20.625" r="1.875" />
		</svg>
	);
}
