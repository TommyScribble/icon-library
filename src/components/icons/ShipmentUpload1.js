import React from 'react';

export default function ShipmentUpload1(props) {
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
			<title>shipment-upload</title>
			<polygon
				className="a"
				points="11.999 0.75 0.749 5.25 11.999 9.75 23.249 5.25 11.999 0.75"
			/>
			<polygon
				className="a"
				points="0.749 5.25 0.749 18.75 11.999 23.25 11.999 9.75 0.749 5.25"
			/>
			<polygon
				className="a"
				points="23.249 5.25 23.249 18.75 11.999 23.25 11.999 9.75 23.249 5.25"
			/>
			<line className="a" x1="18.187" y1="7.275" x2="6.937" y2="2.775" />
			<line className="a" x1="20.624" y1="16.5" x2="18.749" y2="17.25" />
		</svg>
	);
}
