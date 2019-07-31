import React from 'react';

const AnalyticsGraphBar1 = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			focussable="false"
			aria-hidden="true"
			aria-labelledby="AnalyticsGraphBar1"
			stroke="#4d4d4d"
		>
			<title>analytics-graph-bar</title>
			<defs>
				<style
					dangerouslySetInnerHTML={{
						__html: `.a{fill:none;stroke:"#4d4d4d";stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}`,
					}}
				/>
			</defs>
			<line className="a" x1="0.749" y1="23.25" x2="22.499" y2="23.25" />
			<path
				className="a"
				d="M2.749,18.75H5.5a.5.5,0,0,1,.5.5v4a0,0,0,0,1,0,0H2.249a0,0,0,0,1,0,0v-4A.5.5,0,0,1,2.749,18.75Z"
			/>
			<path
				className="a"
				d="M10.249,9.75H13a.5.5,0,0,1,.5.5v13a0,0,0,0,1,0,0H9.749a0,0,0,0,1,0,0v-13A.5.5,0,0,1,10.249,9.75Z"
			/>
			<path
				className="a"
				d="M17.749,14.25H20.5a.5.5,0,0,1,.5.5v8.5a0,0,0,0,1,0,0h-3.75a0,0,0,0,1,0,0v-8.5A.5.5,0,0,1,17.749,14.25Z"
			/>
			<line className="a" x1="6.883" y1="5.121" x2="2.866" y2="9.134" />
			<line className="a" x1="14.311" y1="6.325" x2="9.637" y2="5.075" />
			<line className="a" x1="20.392" y1="2.888" x2="16.811" y2="5.689" />
			<circle className="a" cx="8.249" cy="4.501" r="1.5" />
			<circle className="a" cx="21.75" cy="2.25" r="1.5" />
			<circle className="a" cx="15.75" cy="6.75" r="1.5" />
			<circle className="a" cx="2.249" cy="10.501" r="1.5" />
		</svg>
	);
};

export default AnalyticsGraphBar1;