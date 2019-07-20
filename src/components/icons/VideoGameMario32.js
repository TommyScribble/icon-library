import React from 'react';

export default function VideoGameMario32(props) {
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
			<title>video-game-mario-3</title>
			<line className="a" x1="7.499" y1="12.75" x2="7.499" y2="13.5" />
			<line className="a" x1="16.499" y1="12.75" x2="16.499" y2="13.5" />
			<path className="a" d="M21,11.25c0-2-18-2-18,0V9.75c0-4,18-4,18,0Z" />
			<path
				className="a"
				d="M16.5,1.665C20.049,3.136,22.5,6.084,22.5,8.25a6.674,6.674,0,0,1-1.084,3.808"
			/>
			<path
				className="a"
				d="M2.416,12.117A7.551,7.551,0,0,1,1.5,8.25c0-1.622,2.445-4.8,5.982-6.454"
			/>
			<polyline
				className="a"
				points="9.749 3.75 10.499 0.75 11.999 2.25 13.499 0.75 14.249 3.75"
			/>
			<path
				className="a"
				d="M12,18.62c.81.811,2.609.879,3.888.809.137-.007,1.254-.311.093-1.472-1.362-2.724-6.454-3.017-7.962,0-1.075,1.075-.179,1.457.092,1.472C9.39,19.5,11.189,19.431,12,18.62Z"
			/>
			<path
				className="a"
				d="M3,11.25V12a1.5,1.5,0,0,0,0,3c.013,0,.025-.007.038-.008a8.993,8.993,0,0,0,17.925,0c.013,0,.024.008.037.008a1.5,1.5,0,0,0,0-3v-.75"
			/>
		</svg>
	);
}
