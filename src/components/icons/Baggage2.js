import React from 'react';

const Baggage2 = props => {
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
			<title>baggage</title>
			<rect
				className="a"
				x="0.749"
				y="6.75"
				width="22.5"
				height={15}
				rx={3}
				ry={3}
			/>
			<line className="a" x1="6.749" y1="6.75" x2="6.749" y2="21.75" />
			<line className="a" x1="17.249" y1="6.75" x2="17.249" y2="21.75" />
			<path
				className="a"
				d="M15.749,6.75v-3a1.5,1.5,0,0,0-1.5-1.5h-4.5a1.5,1.5,0,0,0-1.5,1.5v3"
			/>
		</svg>
	);
};

export default Baggage2;
