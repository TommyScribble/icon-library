import React from 'react';

export default function PeopleManGraduate2(props) {
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
			<title>people-man-graduate</title>
			<path className="a" d="M17.249,6a5.25,5.25,0,1,1-10.5,0V.75h10.5Z" />
			<path className="a" d="M2.249,23.25a9.75,9.75,0,1,1,19.5,0" />
			<line className="a" x1="0.749" y1="0.75" x2="23.249" y2="0.75" />
			<line className="a" x1="6.749" y1="5.25" x2="17.249" y2="5.25" />
			<line className="a" x1="2.249" y1="0.75" x2="2.249" y2="8.25" />
			<polyline
				className="a"
				points="7.012 14.871 11.999 18.75 16.986 14.871"
			/>
		</svg>
	);
}
