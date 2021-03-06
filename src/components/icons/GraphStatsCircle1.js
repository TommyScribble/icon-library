import React from 'react';

export default function GraphStatsCircle1(props) {
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
			<title>graph-stats-circle</title>
			<circle className="a" cx="11.999" cy={12} r="11.25" />
			<path
				className="a"
				d="M3.749,12.75h3L9.009,7.1a.75.75,0,0,1,1.4.028L13.7,16.455a.75.75,0,0,0,1.358.122l2.187-3.827h3"
			/>
		</svg>
	);
}
