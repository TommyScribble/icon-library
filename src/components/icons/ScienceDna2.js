import React from 'react';

export default function ScienceDna2(props) {
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
			<title>science-dna</title>
			<path
				className="a"
				d="M23.136,9.348,20.484,12A6,6,0,0,1,12,3.515L14.651.863"
			/>
			<path
				className="a"
				d="M9.347,23.137,12,20.485A6,6,0,0,0,3.514,12L.862,14.652"
			/>
			<line className="a" x1="22.606" y1="9.879" x2="14.121" y2="1.393" />
			<line className="a" x1="20.484" y1={12} x2="11.999" y2="3.515" />
			<line className="a" x1="14.651" y1="10.409" x2="10.446" y2="6.204" />
			<path
				className="a"
				d="M.862,14.652,3.514,12A6,6,0,1,1,12,20.485L9.347,23.137"
			/>
			<line className="a" x1="1.393" y1="14.121" x2="9.878" y2="22.607" />
			<line className="a" x1="3.514" y1={12} x2="11.999" y2="20.485" />
			<line className="a" x1="9.347" y1="13.591" x2="13.553" y2="17.796" />
		</svg>
	);
}
