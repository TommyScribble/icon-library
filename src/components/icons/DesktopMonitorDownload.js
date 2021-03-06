import React from 'react';

export default function DesktopMonitorDownload(props) {
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
			<title>desktop-monitor-download</title>
			<path
				className="a"
				d="M6.749,6.75h-3a1.5,1.5,0,0,0-1.5,1.5V18a1.5,1.5,0,0,0,1.5,1.5h16.5a1.5,1.5,0,0,0,1.5-1.5V8.25a1.5,1.5,0,0,0-1.5-1.5h-3"
			/>
			<line className="a" x1="11.999" y1="19.5" x2="11.999" y2="23.25" />
			<line className="a" x1="8.249" y1="23.25" x2="15.749" y2="23.25" />
			<line className="a" x1="2.249" y1="16.5" x2="21.749" y2="16.5" />
			<polyline className="a" points="8.999 9.75 11.999 12.75 14.999 9.75" />
			<line className="a" x1="11.999" y1="12.75" x2="11.999" y2="0.75" />
		</svg>
	);
}
