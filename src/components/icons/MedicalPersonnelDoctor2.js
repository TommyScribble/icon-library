import React from 'react';

export default function MedicalPersonnelDoctor2(props) {
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
			<title>medical-personnel-doctor</title>
			<rect
				className="a"
				x="11.249"
				y="14.25"
				width={12}
				height={9}
				rx={1}
				ry={1}
			/>
			<path
				className="a"
				d="M16,11.25h2.5a1,1,0,0,1,1,1v2a0,0,0,0,1,0,0H15a0,0,0,0,1,0,0v-2A1,1,0,0,1,16,11.25Z"
			/>
			<line className="a" x1="17.249" y1="17.25" x2="17.249" y2="20.25" />
			<line className="a" x1="15.749" y1="18.75" x2="18.749" y2="18.75" />
			<path className="a" d="M.749,17.25a6.754,6.754,0,0,1,9.4-6.208" />
			<path
				className="a"
				d="M3.944,2.781a6.849,6.849,0,0,0,4.93,2.094,6.851,6.851,0,0,0,2.713-.558"
			/>
			<circle className="a" cx="7.499" cy="4.875" r="4.125" />
			<line className="a" x1="7.499" y1="10.5" x2="7.499" y2="17.25" />
		</svg>
	);
}
