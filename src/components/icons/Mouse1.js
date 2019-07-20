import React from 'react';

export default function Mouse1(props) {
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
			<title>mouse</title>
			<path
				className="a"
				d="M6.749,23.25h0a6,6,0,0,1-6-6v-6a6,6,0,0,1,6-6h0a6,6,0,0,1,6,6v6A6,6,0,0,1,6.749,23.25Z"
			/>
			<line className="a" x1="0.749" y1="12.75" x2="12.749" y2="12.75" />
			<path
				className="a"
				d="M6.749,12.75V5.25h0a4.5,4.5,0,0,1,4.5-4.5h0a4.5,4.5,0,0,1,4.5,4.5V7.5a3.75,3.75,0,0,0,3.75,3.75h0a3.75,3.75,0,0,0,3.75-3.75V.75"
			/>
		</svg>
	);
}
