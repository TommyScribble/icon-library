import React from 'react';

export default function CoffeeCold2(props) {
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
			<title>coffee-cold</title>
			<polygon
				className="a"
				points="17.999 9.56 5.999 9.56 8.249 23.06 16.499 23.06 17.999 9.56"
			/>
			<line className="a" x1="3.749" y1="9.56" x2="20.249" y2="9.56" />
			<path className="a" d="M18,9.56a6,6,0,1,0-12,0" />
			<path
				className="a"
				d="M11.276,15.56,13.9,2.115A1.5,1.5,0,0,1,15.78,1L19.5,2.06"
			/>
			<line className="a" x1="6.999" y1="15.56" x2="17.333" y2="15.56" />
		</svg>
	);
}
