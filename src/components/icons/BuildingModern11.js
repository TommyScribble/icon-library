import React from 'react';

const BuildingModern11 = props => {
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
			<title>building-modern-1</title>
			<path
				className="a"
				d="M14.249,23.25v-12a1.5,1.5,0,0,1,1.5-1.5h6a1.5,1.5,0,0,1,1.5,1.5v12"
			/>
			<line className="a" x1="14.249" y1="14.25" x2="23.249" y2="14.25" />
			<line className="a" x1="14.249" y1="18.75" x2="23.249" y2="18.75" />
			<polyline className="a" points="15.749 9.75 18.749 5.25 21.749 9.75" />
			<polyline
				className="a"
				points="0.749 23.25 0.749 5.25 5.999 0.75 11.249 5.25 11.249 23.25"
			/>
			<line className="a" x1="0.749" y1="7.5" x2="11.249" y2="12.75" />
			<line className="a" x1="0.749" y1={18} x2="11.249" y2="23.25" />
			<line className="a" x1="0.749" y1={18} x2="11.249" y2="12.75" />
			<line className="a" x1="0.749" y1={6} x2="11.249" y2={6} />
		</svg>
	);
};

export default BuildingModern11;
