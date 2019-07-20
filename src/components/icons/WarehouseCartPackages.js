import React from 'react';

export default function WarehouseCartPackages(props) {
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
			<title>warehouse-cart-packages</title>
			<path
				className="cls-1"
				d="M23.5,15.75H5.5a1,1,0,0,1-1-1V4.25a.5.5,0,0,0-.5-.5H1.5a1,1,0,0,0-1,1v.61a.5.5,0,0,0,.379.485L4.5,6.75"
			/>
			<circle className="cls-1" cx={6} cy="18.75" r="1.5" />
			<circle className="cls-1" cx={22} cy="18.75" r="1.5" />
			<path
				className="cls-1"
				d="M8.5,8.75h5a1,1,0,0,1,1,1v6a0,0,0,0,1,0,0h-7a0,0,0,0,1,0,0v-6A1,1,0,0,1,8.5,8.75Z"
			/>
			<path
				className="cls-1"
				d="M15.5,9.75h6a1,1,0,0,1,1,1v5a0,0,0,0,1,0,0h-8a0,0,0,0,1,0,0v-5A1,1,0,0,1,15.5,9.75Z"
			/>
			<line className="cls-1" x1="11.5" y1="13.75" x2="12.5" y2="13.75" />
			<line className="cls-1" x1="19.5" y1="13.75" x2="20.5" y2="13.75" />
			<path
				className="cls-1"
				d="M11.5,6.75v-2a1,1,0,0,1,1-1h5a1,1,0,0,1,1,1v3"
			/>
		</svg>
	);
}
