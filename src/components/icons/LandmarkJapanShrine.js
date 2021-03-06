import React from 'react';

export default function LandmarkJapanShrine(props) {
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
			<title>landmark-japan-shrine</title>
			<path
				className="a"
				d="M9,21.75a.75.75,0,0,1-.75.75H6.828a.75.75,0,0,1-.746-.825L7.5,7.5H9Z"
			/>
			<path
				className="a"
				d="M15,21.75a.75.75,0,0,0,.75.75H17.17a.75.75,0,0,0,.747-.825L16.5,7.5H15Z"
			/>
			<path
				className="a"
				d="M22.5,1.5,20.614,6.527a1.5,1.5,0,0,1-1.4.973H4.789a1.5,1.5,0,0,1-1.4-.973L1.5,1.5a35.853,35.853,0,0,0,20.986,0Z"
			/>
			<line className="a" x1="8.999" y1={12} x2="14.999" y2={12} />
			<line className="a" x1="4.499" y1={12} x2="7.025" y2={12} />
			<line className="a" x1="19.499" y1={12} x2="16.973" y2={12} />
			<line className="a" x1="11.999" y1="7.5" x2="11.999" y2={12} />
		</svg>
	);
}
