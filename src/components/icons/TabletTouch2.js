import React from 'react';

export default function TabletTouch2(props) {
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
			<title>tablet-touch</title>
			<path
				className="a"
				d="M13.5,22.5,10.57,20.156A1.637,1.637,0,0,1,10,18.48h0a1.637,1.637,0,0,1,2.321-1.067L13.5,18V12.75a1.5,1.5,0,0,1,1.5-1.5h0a1.5,1.5,0,0,1,1.5,1.5v3l1.993.332A3,3,0,0,1,21,19.041V22.5"
			/>
			<line className="a" x1="5.249" y1={6} x2="12.749" y2={6} />
			<line className="a" x1="5.249" y1={9} x2="12.749" y2={9} />
			<line className="a" x1="5.249" y1={12} x2="8.999" y2={12} />
			<path
				className="a"
				d="M7.5,18H2.249a1.5,1.5,0,0,1-1.5-1.5V3a1.5,1.5,0,0,1,1.5-1.5h19.5a1.5,1.5,0,0,1,1.5,1.5V15"
			/>
			<line className="a" x1="18.749" y1="1.5" x2="18.749" y2="10.5" />
		</svg>
	);
}
