import React from 'react';

export default function GraphStatsCircle(props) {
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
			<title>graph-stats-circle</title>
			<circle className="cls-1" cx={12} cy={12} r="11.5" />
			<path
				className="cls-1"
				d="M2.5,13.5H4.874c2.206,0,2.015-1.867,3.633-9.632a.5.5,0,0,1,.979,0L12.548,18.8a.5.5,0,0,0,.976.016l2.109-8.787a.5.5,0,0,1,.951-.069c.743,1.858,1.04,3.541,2.77,3.541H21.5"
			/>
		</svg>
	);
}
