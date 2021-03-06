import React from 'react';

export default function GaugeDashboard1(props) {
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
			<title>gauge-dashboard-1</title>
			<circle className="cls-1" cx={12} cy={12} r="11.5" />
			<path
				className="cls-1"
				d="M13.414,13.414a2,2,0,0,1-2.828-2.828c.781-.781,8.132-5.3,8.132-5.3S14.2,12.633,13.414,13.414Z"
			/>
			<line className="cls-1" x1="3.5" y1={12} x2={5} y2={12} />
			<line className="cls-1" x1="5.99" y1="5.99" x2="7.05" y2="7.05" />
			<line className="cls-1" x1={12} y1="3.5" x2={12} y2={5} />
			<line className="cls-1" x1="20.5" y1={12} x2={19} y2={12} />
			<path
				className="cls-1"
				d="M20.633,19.6A14.708,14.708,0,0,0,12,17a14.708,14.708,0,0,0-8.633,2.6"
			/>
		</svg>
	);
}
