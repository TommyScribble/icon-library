import React from 'react';

export default function PrintText2(props) {
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
			<title>print-text</title>
			<path
				className="a"
				d="M5.249,17.25h-3a1.5,1.5,0,0,1-1.5-1.5V8.25a1.5,1.5,0,0,1,1.5-1.5h19.5a1.5,1.5,0,0,1,1.5,1.5v7.5a1.5,1.5,0,0,1-1.5,1.5h-3"
			/>
			<line className="a" x1="3.749" y1="9.75" x2="5.249" y2="9.75" />
			<rect className="a" x="5.249" y="12.75" width="13.5" height="10.5" />
			<path
				className="a"
				d="M18.749,6.75H5.249V2.25a1.5,1.5,0,0,1,1.5-1.5h10.5a1.5,1.5,0,0,1,1.5,1.5Z"
			/>
			<line className="a" x1="8.249" y1="15.75" x2="15.749" y2="15.75" />
			<line className="a" x1="8.249" y1="18.75" x2="13.499" y2="18.75" />
		</svg>
	);
}
