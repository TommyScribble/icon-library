import React from 'react';

export default function Pin1(props) {
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
			<title>pin</title>
			<path
				className="a"
				d="M4.948,8.784a1.5,1.5,0,0,0-.3,2.356l8.213,8.213a1.5,1.5,0,0,0,2.356-.3,7.522,7.522,0,0,0,.81-5.54l6.53-4.155A1.5,1.5,0,0,0,22.81,7.03L16.969,1.189a1.5,1.5,0,0,0-2.326.256L10.488,7.974A7.522,7.522,0,0,0,4.948,8.784Z"
			/>
			<line className="a" x1="8.752" y1="15.247" x2="0.749" y2="23.25" />
		</svg>
	);
}
