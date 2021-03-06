import React from 'react';

export default function Pencil2(props) {
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
			<title>pencil-2</title>
			<polygon
				className="cls-1"
				points="7 21.5 0.5 23.5 2.5 17 15.33 4.169 19.83 8.669 7 21.5"
			/>
			<path
				className="cls-1"
				d="M15.33,4.169l3.086-3.086a2.007,2.007,0,0,1,2.828,0l1.672,1.672a2,2,0,0,1,0,2.828L19.83,8.669"
			/>
			<line className="cls-1" x1="17.58" y1="6.419" x2={6} y2={18} />
			<polyline className="cls-1" points="2.5 17 3.5 18 6 18 6 20.5 7 21.5" />
			<line className="cls-1" x1="1.5" y1="20.5" x2="3.5" y2="22.5" />
			<line className="cls-1" x1="16.83" y1="2.669" x2="21.33" y2="7.169" />
		</svg>
	);
}
