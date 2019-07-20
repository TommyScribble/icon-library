import React from 'react';

export default function Pin2(props) {
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
			<title>pin</title>
			<line className="cls-1" x1="9.914" y1="14.086" x2="0.5" y2="23.5" />
			<path
				className="cls-1"
				d="M21.414,8.586a.707.707,0,0,0,1,0l.793-.793a1,1,0,0,0,0-1.414L17.621.793a1,1,0,0,0-1.414,0l-.793.793a.707.707,0,0,0,0,1,.707.707,0,0,1,0,1L11.207,7.793a1,1,0,0,1-.707.293H7.328a1,1,0,0,0-.707.293l-.5.5a1,1,0,0,0,0,1.414l7.586,7.586a1,1,0,0,0,1.414,0l.5-.5a1,1,0,0,0,.293-.707V13.5a1,1,0,0,1,.293-.707l4.207-4.207A.707.707,0,0,1,21.414,8.586Z"
			/>
		</svg>
	);
}
