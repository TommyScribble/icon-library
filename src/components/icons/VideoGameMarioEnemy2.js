import React from 'react';

export default function VideoGameMarioEnemy2(props) {
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
			<title>video-game-mario-enemy</title>
			<path
				className="a"
				d="M13.813,16.256A8.034,8.034,0,0,1,7.5,19.5,6.75,6.75,0,0,1,7.5,6C11.227,6,15,9.022,15,12.75"
			/>
			<path
				className="a"
				d="M18.724,7.331a7.514,7.514,0,1,1-8.278,12.222c-.159-.158-.309-.323-.451-.491"
			/>
			<path className="a" d="M17.121,15.621a3,3,0,0,1-4.243,0" />
			<line className="a" x1="4.499" y1="9.75" x2="4.499" y2="11.25" />
			<path
				className="a"
				d="M12.9,8.208c-.652-3.1.875-5.958,2.847-5.958,1.657,0,3,2.015,3,4.5,0,2.988-1.941,5.3-4.035,4.24"
			/>
			<path
				className="a"
				d="M9.024,6.164C9.216,3.956,10.475,2.25,12,2.25a2.46,2.46,0,0,1,1.875.987"
			/>
			<path d="M14.249,4.875A1.125,1.125,0,1,0,15.374,6a1.125,1.125,0,0,0-1.125-1.125Z" />
			<path className="a" d="M18.777,13.05a3.753,3.753,0,0,1,4.472,1.2" />
			<line className="a" x1="22.499" y1={6} x2="20.602" y2="8.53" />
		</svg>
	);
}
