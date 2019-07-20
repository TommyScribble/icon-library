import React from 'react';

export default function OfficeWorkWireless(props) {
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
			<title>office-work-wireless</title>
			<circle className="a" cx="4.499" cy="7.5" r="2.25" />
			<path
				className="a"
				d="M9.751,23.25a1.5,1.5,0,0,1-1.344-.829l-.67-1.342A1.491,1.491,0,0,0,6.4,20.25H4.5A1.5,1.5,0,0,1,3,18.75v-6A1.5,1.5,0,0,1,5.331,11.5l1.116.744a3,3,0,0,0,1.665.5H9.749a1.5,1.5,0,1,1,0,3H8.112A5.964,5.964,0,0,1,6,15.366V17.25h.4a4.478,4.478,0,0,1,4.025,2.487l.671,1.342a1.5,1.5,0,0,1-1.34,2.171Z"
			/>
			<line className="a" x1="4.499" y1="20.25" x2="1.499" y2="20.25" />
			<line className="a" x1="9.749" y1="15.75" x2="20.249" y2="15.75" />
			<line className="a" x1="14.999" y1="15.75" x2="14.999" y2="23.25" />
			<polyline className="a" points="14.249 12.75 20.249 12.75 22.499 7.5" />
			<path d="M14.249,6.625a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z" />
			<path className="a" d="M11.6,4.848a3.75,3.75,0,0,1,5.3,0" />
			<path className="a" d="M9.476,2.727a6.75,6.75,0,0,1,9.546,0" />
			<line className="a" x1="3.749" y1="23.25" x2="3.749" y2="20.25" />
		</svg>
	);
}
