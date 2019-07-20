import React from 'react';

export default function SendEmail22(props) {
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
			<title>send-email-2</title>
			<path
				className="a"
				d="M2.758,15.629a1.664,1.664,0,0,1-.882-3.075L20.359,1A1.663,1.663,0,0,1,22.875,2.72L19.281,21.893a1.664,1.664,0,0,1-2.966.691L11.1,15.629Z"
			/>
			<path
				className="a"
				d="M11.1,15.629H8.6V20.8a1.663,1.663,0,0,0,2.6,1.374l3.178-2.166Z"
			/>
			<line className="a" x1="11.098" y1="15.629" x2="22.178" y2="1.039" />
		</svg>
	);
}
