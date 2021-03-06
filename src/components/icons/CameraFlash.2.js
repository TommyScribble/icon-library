import React from 'react';

export default function CameraFlash2(props) {
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
			<title>camera-flash</title>
			<path
				className="a"
				d="M18,12.75l-1.085-2.171a1.5,1.5,0,0,0-1.342-.829H11.426a1.5,1.5,0,0,0-1.341.829L9,12.75H4.5A1.5,1.5,0,0,0,3,14.25v7.5a1.5,1.5,0,0,0,1.5,1.5h15a1.5,1.5,0,0,0,1.5-1.5v-7.5a1.5,1.5,0,0,0-1.5-1.5Z"
			/>
			<path d="M6.374,15A1.125,1.125,0,1,0,7.5,16.125,1.125,1.125,0,0,0,6.374,15Z" />
			<line className="a" x1="5.999" y1="12.75" x2="5.999" y2="11.25" />
			<circle className="a" cx="13.499" cy="17.25" r={3} />
			<rect
				className="a"
				x="8.999"
				y="0.75"
				width={9}
				height="4.5"
				rx="0.75"
				ry="0.75"
			/>
			<polygon
				className="a"
				points="10.499 5.25 11.426 9.75 15.572 9.75 16.499 5.25 10.499 5.25"
			/>
		</svg>
	);
}
