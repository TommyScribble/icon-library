import React from 'react';

const Baggage1 = props => {
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
			<title>baggage</title>
			<rect
				className="cls-1"
				x="0.5"
				y={6}
				width={23}
				height={16}
				rx={3}
				ry={3}
			/>
			<path
				className="cls-1"
				d="M8.5,6V4a2.006,2.006,0,0,1,2-2h3a2.006,2.006,0,0,1,2,2V6"
			/>
			<line className="cls-1" x1="19.5" y1={6} x2="19.5" y2={22} />
			<line className="cls-1" x1="16.5" y1={6} x2="16.5" y2={22} />
			<line className="cls-1" x1="7.5" y1={6} x2="7.5" y2={22} />
			<line className="cls-1" x1="4.5" y1={6} x2="4.5" y2={22} />
		</svg>
	);
};

export default Baggage1;
