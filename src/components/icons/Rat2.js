import React from 'react';

export default function Rat2(props) {
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
			<title>rat</title>
			<path className="a" d="M7.8,21.45a5.923,5.923,0,0,0,4.2,1.8" />
			<path
				className="a"
				d="M19.055,16.172A18.965,18.965,0,0,0,19.5,12a6.019,6.019,0,0,0-.45-2.25,4.456,4.456,0,0,0,4.2-4.5,4.5,4.5,0,0,0-9,0v.3A11.579,11.579,0,0,0,12,5.25a11.579,11.579,0,0,0-2.25.3v-.3a4.42,4.42,0,0,0-4.5-4.5,4.42,4.42,0,0,0-4.5,4.5,4.456,4.456,0,0,0,4.2,4.5A6.019,6.019,0,0,0,4.5,12a18.965,18.965,0,0,0,.444,4.172"
			/>
			<path className="a" d="M16.2,21.45a5.923,5.923,0,0,1-4.2,1.8" />
			<line className="a" x1="11.249" y1="20.25" x2="12.749" y2="20.25" />
			<line className="a" x1="17.999" y1="15.75" x2="21.749" y2="17.25" />
			<line className="a" x1="17.249" y1={18} x2="19.499" y2="20.25" />
			<line className="a" x1="5.999" y1="15.75" x2="2.249" y2="17.25" />
			<line className="a" x1="6.749" y1={18} x2="4.499" y2="20.25" />
			<path d="M8.549,10.5a1.2,1.2,0,1,0,1.2,1.2,1.2,1.2,0,0,0-1.2-1.2Z" />
			<path d="M15.3,10.5a1.2,1.2,0,1,0,1.2,1.2,1.2,1.2,0,0,0-1.2-1.2Z" />
		</svg>
	);
}
