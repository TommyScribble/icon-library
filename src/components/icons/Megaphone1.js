import React from 'react';

export default function Megaphone1(props) {
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
			<title>megaphone-1</title>
			<line className="a" x1="0.749" y1={9} x2="0.749" y2={15} />
			<line className="a" x1="23.249" y1="1.5" x2="23.249" y2="22.5" />
			<line className="a" x1="0.749" y1="10.5" x2="23.249" y2={3} />
			<line className="a" x1="0.749" y1="13.5" x2="23.249" y2={21} />
			<path className="a" d="M5.126,14.959V15A6.709,6.709,0,0,0,17.1,18.949" />
		</svg>
	);
}
