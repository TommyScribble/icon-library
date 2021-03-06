import React from 'react';

export default function ProgrammingFlag1(props) {
	return (
		<svg
			id="Light"
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
							'.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;}',
					}}
				/>
			</defs>
			<title>programming-flag</title>
			<line className="cls-1" x1="0.5" y1="23.5" x2="0.5" y2="0.5" />
			<path
				className="cls-1"
				d="M.5,18.511l3.224-.992a9.83,9.83,0,0,1,8.039,1.023,9.823,9.823,0,0,0,7.849,1.08l3.054-.873a1.149,1.149,0,0,0,.834-1.105V4.484a1.15,1.15,0,0,0-1.466-1.1l-2.422.692a9.831,9.831,0,0,1-7.849-1.08A9.822,9.822,0,0,0,3.724,1.968L.5,2.96Z"
			/>
			<polyline className="cls-1" points="15.5 7.5 18.5 10.5 15.5 13.5" />
			<polyline className="cls-1" points="8.5 7.5 5.5 10.5 8.5 13.5" />
			<line className="cls-1" x1={13} y1="7.5" x2={11} y2="13.5" />
		</svg>
	);
}
