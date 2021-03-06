import React from 'react';

export default function ShoppingCartDownload2(props) {
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
							'.a,.b{fill:none;stroke:#000;stroke-width:1.5px;}.a{stroke-linecap:round;stroke-linejoin:round;}.b{stroke-miterlimit:10;}',
					}}
				/>
			</defs>
			<title>shopping-cart-download</title>
			<path
				className="a"
				d="M.749,17.25H16.67A1.5,1.5,0,0,0,18.149,16L20.787,2A1.5,1.5,0,0,1,22.266.75h.983"
			/>
			<circle className="b" cx="4.874" cy="21.375" r="1.875" />
			<circle className="b" cx="14.624" cy="21.375" r="1.875" />
			<line className="a" x1="9.749" y1="2.75" x2="9.749" y2="12.75" />
			<line className="a" x1="9.749" y1="12.75" x2="5.999" y2={9} />
			<line className="a" x1="9.749" y1="12.75" x2="13.499" y2={9} />
		</svg>
	);
}
