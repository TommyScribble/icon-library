import React from 'react';

export default function ELearningMonitor1(props) {
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
			<title>e-learning-monitor</title>
			<rect
				className="cls-1"
				x="0.5"
				y={2}
				width={23}
				height={17}
				rx={1}
				ry={1}
			/>
			<line className="cls-1" x1={7} y1={22} x2={17} y2={22} />
			<line className="cls-1" x1="10.5" y1={19} x2="10.5" y2={22} />
			<line className="cls-1" x1="13.5" y1={19} x2="13.5" y2={22} />
			<path
				className="cls-1"
				d="M12.894,11.331,18.428,8.96a.5.5,0,0,0,0-.92L12.894,5.669a1,1,0,0,0-.788,0L5.5,8.5l6.606,2.831A1,1,0,0,0,12.894,11.331Z"
			/>
			<path
				className="cls-1"
				d="M8.5,9.786v3.405a.5.5,0,0,0,.276.447l3.277,1.638a1,1,0,0,0,.894,0l3.277-1.638a.5.5,0,0,0,.276-.447V9.786"
			/>
			<line className="cls-1" x1="5.5" y1="8.5" x2="5.5" y2={12} />
			<path
				className="cls-1"
				d="M5.5,12,4.127,15.662A.249.249,0,0,0,4.361,16H6.639a.249.249,0,0,0,.234-.338L5.5,12"
			/>
		</svg>
	);
}
