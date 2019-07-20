import React from 'react';

export default function OptimizationTimer11(props) {
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
			<title>optimization-timer-1</title>
			<path
				className="a"
				d="M21,20.25h.75a1.5,1.5,0,0,0,1.5-1.5V2.365A1.62,1.62,0,0,0,21.634.75H2.356A1.612,1.612,0,0,0,.749,2.357V18.635A1.62,1.62,0,0,0,2.365,20.25H3"
			/>
			<line className="a" x1="0.749" y1="5.25" x2="23.249" y2="5.25" />
			<circle className="a" cx="11.999" cy="17.25" r={6} />
			<line className="a" x1="11.999" y1="17.25" x2="14.08" y2={15} />
			<line className="a" x1="11.999" y1="11.25" x2="11.999" y2="8.25" />
			<line className="a" x1="10.499" y1="8.25" x2="13.499" y2="8.25" />
			<line className="a" x1="15.849" y1="12.583" x2="17.183" y2="11.25" />
			<line className="a" x1="7.849" y1="12.583" x2="6.516" y2="11.25" />
		</svg>
	);
}
