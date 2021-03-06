import React from 'react';

export default function CoffeeCold(props) {
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
			<title>coffee-cold</title>
			<path
				className="cls-1"
				d="M18,10.5,16.065,23.076a.5.5,0,0,1-.494.424H8.429a.5.5,0,0,1-.494-.424L6,10.5"
			/>
			<path className="cls-1" d="M6,10.5a6,6,0,0,1,12,0Z" />
			<line className="cls-1" x1="3.5" y1="10.5" x2="20.5" y2="10.5" />
			<path
				className="cls-1"
				d="M10,21.5,14.234,1.3A1,1,0,0,1,15.66.606L19.5,2.525"
			/>
			<line className="cls-1" x1="6.769" y1="15.5" x2="17.23" y2="15.5" />
		</svg>
	);
}
