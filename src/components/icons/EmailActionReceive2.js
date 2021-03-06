import React from 'react';

export default function EmailActionReceive2(props) {
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
			<title>email-action-receive</title>
			<polygon
				className="cls-1"
				points="12 23.5 23 18.5 23 8.5 12 13.5 1 8.5 1 18.5 12 23.5"
			/>
			<line className="cls-1" x1={6} y1="6.228" x2={1} y2="8.5" />
			<line className="cls-1" x1={23} y1="8.5" x2={18} y2="6.228" />
			<line className="cls-1" x1={12} y1="13.5" x2={12} y2="23.5" />
			<line className="cls-1" x1={12} y1="8.5" x2={12} y2="0.5" />
			<polyline className="cls-1" points="16 4.5 12 8.5 8 4.5" />
		</svg>
	);
}
