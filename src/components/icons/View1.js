import React from 'react';

export default function View1(props) {
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
			<title>view</title>
			<circle className="cls-1" cx={12} cy={12} r="3.5" />
			<path
				className="cls-1"
				d="M23.376,11.672C22.213,10.352,17.562,5.5,12,5.5S1.787,10.352.624,11.672a.5.5,0,0,0,0,.656C1.787,13.648,6.438,18.5,12,18.5s10.213-4.852,11.376-6.172a.5.5,0,0,0,0-.656Z"
			/>
		</svg>
	);
}
