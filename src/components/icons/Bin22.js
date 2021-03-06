import React from 'react';

const Bin22 = props => {
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
			<title>bin-2</title>
			<path
				className="a"
				d="M17.249,21H6.749a1.5,1.5,0,0,1-1.5-1.5V6h13.5V19.5A1.5,1.5,0,0,1,17.249,21Z"
			/>
			<line className="a" x1="9.749" y1="16.5" x2="9.749" y2="10.5" />
			<line className="a" x1="14.249" y1="16.5" x2="14.249" y2="10.5" />
			<line className="a" x1="2.249" y1={6} x2="21.749" y2={6} />
			<path
				className="a"
				d="M14.249,3h-4.5a1.5,1.5,0,0,0-1.5,1.5V6h7.5V4.5A1.5,1.5,0,0,0,14.249,3Z"
			/>
		</svg>
	);
};

export default Bin22;
