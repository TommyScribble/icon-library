import React from 'react';

const CameraFlash1 = props => {
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
			<title>camera-flash</title>
			<path
				className="cls-1"
				d="M22.5,22A1.5,1.5,0,0,1,21,23.5H3A1.5,1.5,0,0,1,1.5,22V13A1.5,1.5,0,0,1,3,11.5H8a2.782,2.782,0,0,0,1.707-.707L11,9.5h6l1.293,1.293A2.782,2.782,0,0,0,20,11.5h1A1.5,1.5,0,0,1,22.5,13Z"
			/>
			<path
				className="cls-1"
				d="M3.5,11.5v-1a1,1,0,0,1,1-1h1a1,1,0,0,1,1,1v1"
			/>
			<circle className="cls-1" cx={5} cy={15} r="1.5" />
			<circle className="cls-1" cx="14.5" cy={17} r="2.5" />
			<circle className="cls-1" cx="14.5" cy={17} r="4.5" />
			<rect
				className="cls-1"
				x="8.5"
				y="0.5"
				width={11}
				height={6}
				rx={1}
				ry={1}
			/>
			<rect className="cls-1" x="10.5" y="2.5" width={7} height={2} />
			<line className="cls-1" x1={10} y1="6.5" x2={11} y2="9.5" />
			<line className="cls-1" x1={18} y1="6.5" x2={17} y2="9.5" />
		</svg>
	);
};

export default CameraFlash1;
