import React from 'react';

export default function Mouse2(props) {
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
			<title>mouse</title>
			<path
				className="cls-1"
				d="M12.5,17.5a6,6,0,0,1-12,0v-9a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3Z"
			/>
			<line className="cls-1" x1="0.5" y1="10.5" x2="12.5" y2="10.5" />
			<path
				className="cls-1"
				d="M6.5,10.5v-5a5,5,0,0,1,10,0V8a3.5,3.5,0,0,0,7,0V.5"
			/>
		</svg>
	);
}
