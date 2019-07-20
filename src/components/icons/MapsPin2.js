import React from 'react';

export default function MapsPin2(props) {
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
			<title>maps-pin</title>
			<path
				className="cls-1"
				d="M17.178,5.588c0,2.332-3.506,6.929-4.7,8.424a.5.5,0,0,1-.783,0C10.506,12.516,7,7.92,7,5.588a5.089,5.089,0,0,1,10.178,0Z"
			/>
			<path
				className="cls-1"
				d="M14,5.588A1.908,1.908,0,1,1,12.09,3.68,1.909,1.909,0,0,1,14,5.588Z"
			/>
			<path
				className="cls-1"
				d="M17.06,4.5H19.1a1,1,0,0,1,.994.895l1.79,17a1,1,0,0,1-1,1.105H3.111a1,1,0,0,1-1-1.105l1.79-17A1,1,0,0,1,4.9,4.5H7.117"
			/>
			<line className="cls-1" x1="2.632" y1="17.5" x2="21.368" y2="17.5" />
			<line className="cls-1" x1="15.029" y1="10.5" x2="20.632" y2="10.5" />
			<line className="cls-1" x1="3.368" y1="10.5" x2="9.149" y2="10.5" />
			<line className="cls-1" x1={7} y1="23.5" x2="7.972" y2="8.5" />
			<line className="cls-1" x1="17.178" y1="23.5" x2="16.207" y2="8.5" />
		</svg>
	);
}
