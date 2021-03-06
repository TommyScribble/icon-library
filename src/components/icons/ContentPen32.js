import React from 'react';

export default function ContentPen32(props) {
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
			<title>content-pen-3</title>
			<path
				className="cls-1"
				d="M7.218,21.028,2.975,16.786l15.4-15.4a3,3,0,0,1,4.242,4.242Z"
			/>
			<path
				className="cls-1"
				d="M18.351,1.409l-.326-.326a2,2,0,0,0-2.828,0L11.308,4.972"
			/>
			<line className="cls-1" x1="14.136" y1="5.624" x2="18.379" y2="9.867" />
			<polygon
				className="cls-1"
				points="2.975 16.786 0.5 23.503 7.218 21.028 2.975 16.786"
			/>
		</svg>
	);
}
