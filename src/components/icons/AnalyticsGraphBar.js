import React from 'react';

const AnalyticsGraphBar = ({ color }) => {
	const style = `.cls-1{fill:none;stroke:${color};stroke-linecap:round;stroke-linejoin:round;}`;

	return (
		<svg
			id="Light"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			aria-hidden={true}
			focusable={false}
			fill="none"
			stroke={color}
		>
			<defs>
				<style dangerouslySetInnerHTML={{ __html: style }} />
			</defs>
			<title>analytics-graph-bar</title>
			<line className="cls-1" x1="0.5" y1="23.5" x2="23.5" y2="23.5" />
			<path
				className="cls-1"
				d="M4.5,19a.5.5,0,0,0-.5-.5H2a.5.5,0,0,0-.5.5v4.5h3Z"
			/>
			<path
				className="cls-1"
				d="M10.5,14a.5.5,0,0,0-.5-.5H8a.5.5,0,0,0-.5.5v9.5h3Z"
			/>
			<path
				className="cls-1"
				d="M16.5,16a.5.5,0,0,0-.5-.5H14a.5.5,0,0,0-.5.5v7.5h3Z"
			/>
			<path
				className="cls-1"
				d="M22.5,9a.5.5,0,0,0-.5-.5H20a.5.5,0,0,0-.5.5V23.5h3Z"
			/>
			<circle className="cls-1" cx={3} cy="11.5" r="1.5" />
			<circle className="cls-1" cx={9} cy="6.5" r="1.5" />
			<circle className="cls-1" cx={15} cy="8.5" r="1.5" />
			<circle className="cls-1" cx={21} cy={2} r="1.5" />
			<line className="cls-1" x1="4.261" y1="10.45" x2="7.848" y2="7.46" />
			<line className="cls-1" x1="10.424" y1="6.974" x2="13.577" y2="8.025" />
			<line className="cls-1" x1="19.8" y1="2.9" x2="16.041" y2="7.285" />
		</svg>
	);
};

export default AnalyticsGraphBar;
