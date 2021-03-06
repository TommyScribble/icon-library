import React from 'react';

export default function Pencil22(props) {
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
			<title>pencil-2</title>
			<path
				className="a"
				d="M22.191,1.811a3.631,3.631,0,0,0-5.157.035L2.569,16.307l-1.82,6.94,6.942-1.819L22.156,6.967A3.628,3.628,0,0,0,22.191,1.811Z"
			/>
			<line className="a" x1="16.621" y1="2.26" x2="21.743" y2="7.38" />
			<line className="a" x1="14.531" y1="4.348" x2="19.653" y2="9.468" />
			<polyline className="a" points="2.569 16.307 6.159 17.839 7.695 21.423" />
			<line className="a" x1="17.092" y1="6.908" x2="6.159" y2="17.838" />
		</svg>
	);
}
