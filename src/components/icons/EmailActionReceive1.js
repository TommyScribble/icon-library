import React from 'react';

export default function EmailActionReceive1(props) {
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
			<title>email-action-receive</title>
			<line className="a" x1="11.999" y1="0.75" x2="11.999" y2="10.5" />
			<polyline className="a" points="8.249 7.5 11.999 10.5 15.749 7.5" />
			<polygon
				className="a"
				points="11.999 23.25 1.499 17.25 1.499 8.25 11.999 14.25 11.999 23.25"
			/>
			<polygon
				className="a"
				points="22.499 17.25 11.999 23.25 11.999 14.25 22.499 8.25 22.499 17.25"
			/>
			<polyline
				className="a"
				points="14.994 4.497 22.499 8.25 11.999 14.25 1.499 8.25 8.999 4.5"
			/>
		</svg>
	);
}
