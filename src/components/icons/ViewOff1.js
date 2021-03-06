import React from 'react';

export default function ViewOff1(props) {
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
			<title>view-off</title>
			<line className="a" x1="2.782" y1={21} x2="21.532" y2={3} />
			<path
				className="a"
				d="M8.963,19.052A9.985,9.985,0,0,0,12,19.5c4.1.068,8.258-2.814,10.824-5.638a1.66,1.66,0,0,0,0-2.225,20.518,20.518,0,0,0-3.074-2.758"
			/>
			<path
				className="a"
				d="M14.413,6.282A9.649,9.649,0,0,0,12,6C7.968,5.934,3.8,8.752,1.178,11.636a1.66,1.66,0,0,0,0,2.225,20.571,20.571,0,0,0,2.594,2.4"
			/>
			<path className="a" d="M8.249,12.75A3.75,3.75,0,0,1,12,9" />
			<path className="a" d="M15.749,12.749h0A3.75,3.75,0,0,1,12,16.5" />
		</svg>
	);
}
