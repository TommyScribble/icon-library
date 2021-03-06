import React from 'react';

export default function DesktopMonitorDownload1(props) {
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
			<title>desktop-monitor-download</title>
			<circle className="cls-1" cx="17.5" cy="6.5" r={6} />
			<line className="cls-1" x1="17.5" y1="3.5" x2="17.5" y2="9.5" />
			<line className="cls-1" x1="17.5" y1="9.5" x2="15.25" y2="7.25" />
			<line className="cls-1" x1="17.5" y1="9.5" x2="19.75" y2="7.25" />
			<line className="cls-1" x1="0.5" y1="16.5" x2="21.5" y2="16.5" />
			<path
				className="cls-1"
				d="M21.5,13.5v5a1,1,0,0,1-1,1H1.5a1,1,0,0,1-1-1V5.5a1,1,0,0,1,1-1h8"
			/>
			<path className="cls-1" d="M8,23.5a6.979,6.979,0,0,0,1.5-4" />
			<path className="cls-1" d="M14,23.5a6.979,6.979,0,0,1-1.5-4" />
			<line className="cls-1" x1="6.5" y1="23.5" x2="15.5" y2="23.5" />
		</svg>
	);
}
