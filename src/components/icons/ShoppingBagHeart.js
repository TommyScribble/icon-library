import React from 'react';

export default function ShoppingBagHeart(props) {
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
			<title>shopping-bag-heart</title>
			<path
				className="a"
				d="M19.056,6.75H4.943A1.4,1.4,0,0,0,3.506,7.907l-2,13.916A1.356,1.356,0,0,0,2.944,23.25H21.055a1.355,1.355,0,0,0,1.436-1.427l-2-13.916A1.394,1.394,0,0,0,19.056,6.75Z"
			/>
			<path
				className="a"
				d="M15.669,3.807A3.766,3.766,0,0,0,11.983.75h0A3.763,3.763,0,0,0,8.3,3.788"
			/>
			<path
				className="a"
				d="M15.929,12.845a1.9,1.9,0,0,0-2.751,0L12,14.064,10.82,12.845a1.9,1.9,0,0,0-2.751,0,2.06,2.06,0,0,0,0,2.845l3.512,3.631a.578.578,0,0,0,.837,0l3.511-3.631A2.06,2.06,0,0,0,15.929,12.845Z"
			/>
		</svg>
	);
}
