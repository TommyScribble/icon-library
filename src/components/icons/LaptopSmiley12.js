import React from 'react';

export default function LaptopSmiley12(props) {
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
			<title>laptop-smiley-1</title>
			<path className="a" d="M8.249,12.024a5.568,5.568,0,0,0,7.5,0" />
			<line className="a" x1="9.749" y1="7.5" x2="9.749" y2={9} />
			<line className="a" x1="14.249" y1="7.5" x2="14.249" y2={9} />
			<path
				className="a"
				d="M3,13.5V5.25a1.5,1.5,0,0,1,1.5-1.5h15A1.5,1.5,0,0,1,21,5.25V13.5"
			/>
			<path
				className="a"
				d="M.749,16.5A3.75,3.75,0,0,0,4.5,20.25h15a3.75,3.75,0,0,0,3.75-3.75Z"
			/>
		</svg>
	);
}
