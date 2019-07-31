import React from 'react';

export default function ShoppingCartDownload1(props) {
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
			<title>shopping-cart-download</title>
			<circle className="cls-1" cx={16} cy={22} r="1.5" />
			<circle className="cls-1" cx={5} cy={22} r="1.5" />
			<path
				className="cls-1"
				d="M23.5,3.5h-.624a1,1,0,0,0-.992.868L20.116,17.632a1,1,0,0,1-.992.868H.5"
			/>
			<polyline className="cls-1" points="14.5 9.5 9.5 14.5 4.5 9.5" />
			<line className="cls-1" x1="9.5" y1="14.5" x2="9.5" y2="0.5" />
		</svg>
	);
}