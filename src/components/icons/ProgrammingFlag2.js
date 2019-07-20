import React from 'react';

export default function ProgrammingFlag2(props) {
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
							'.a,.b{fill:none;stroke:#000;stroke-linecap:round;stroke-width:1.5px;}.a{stroke-miterlimit:10;}.b{stroke-linejoin:round;}',
					}}
				/>
			</defs>
			<title>programming-flag</title>
			<line className="a" x1="0.749" y1="23.25" x2="0.749" y2="0.75" />
			<path
				className="a"
				d="M.749,18.37,3.9,17.4a9.617,9.617,0,0,1,7.865,1,9.612,9.612,0,0,0,7.678,1.056l2.987-.853a1.126,1.126,0,0,0,.816-1.082V4.648a1.125,1.125,0,0,0-1.434-1.082l-2.369.677a9.612,9.612,0,0,1-7.678-1.056,9.613,9.613,0,0,0-7.865-1l-3.154.97Z"
			/>
			<polyline
				className="b"
				points="15.423 7.598 18.358 10.533 15.423 13.467"
			/>
			<polyline className="b" points="8.575 7.598 5.641 10.533 8.575 13.467" />
			<line className="b" x1="12.977" y1="7.598" x2="11.021" y2="13.467" />
		</svg>
	);
}
