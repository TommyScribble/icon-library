import React from 'react';

export default function BombGrenade(props) {
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
			<title>bomb-grenade</title>
			<path
				className="cls-1"
				d="M8.344,4.687a.5.5,0,0,1,.39-.187h5.525a.5.5,0,0,1,.389.185c5.142,6.333,5.119,12.544,0,18.636a.5.5,0,0,1-.383.179H8.729a.5.5,0,0,1-.385-.18C3.255,17.2,3.284,10.994,8.344,4.687Z"
			/>
			<path
				className="cls-1"
				d="M1.648,19.064C-1.5,12.043,2.482,4.014,5.913,1.5H18.261"
			/>
			<circle className="cls-1" cx="20.496" cy="3.5" r={3} />
			<line className="cls-1" x1="5.893" y1="8.5" x2="17.128" y2="8.5" />
			<line className="cls-1" x1="5.837" y1="19.5" x2="17.182" y2="19.5" />
			<line className="cls-1" x1="9.496" y1="1.5" x2="9.496" y2="4.5" />
			<line className="cls-1" x1="13.496" y1="1.5" x2="13.496" y2="4.5" />
		</svg>
	);
}
