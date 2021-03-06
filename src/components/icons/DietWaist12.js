import React from 'react';

export default function DietWaist12(props) {
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
			<title>diet-waist-1</title>
			<path
				className="a"
				d="M5.249.75s1.5,1.5,1.5,6c0,5.25-4.5,6-4.5,12a6.57,6.57,0,0,0,1.5,4.5"
			/>
			<path
				className="a"
				d="M18.749.75s-1.5,1.5-1.5,6c0,5.25,4.5,6,4.5,12a6.57,6.57,0,0,1-1.5,4.5"
			/>
			<path
				className="a"
				d="M.749,3.75l2.47,2.47a.749.749,0,0,1,0,1.06L.749,9.75"
			/>
			<path
				className="a"
				d="M23.249,3.75,20.78,6.22a.749.749,0,0,0,0,1.06l2.469,2.47"
			/>
			<line className="a" x1="11.999" y1="23.25" x2="11.999" y2="20.25" />
			<path
				className="a"
				d="M21.093,15.194C17.278,16.144,12,20.25,12,20.25S6.72,16.144,2.906,15.194Z"
			/>
			<path d="M12,9.375A1.125,1.125,0,1,0,13.124,10.5,1.125,1.125,0,0,0,12,9.375Z" />
		</svg>
	);
}
