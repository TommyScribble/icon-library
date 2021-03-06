import React from 'react';

export default function Megaphone12(props) {
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
			<title>megaphone-1</title>
			<line className="cls-1" x1="0.5" y1="9.5" x2="0.5" y2="14.5" />
			<line className="cls-1" x1="23.5" y1="2.5" x2="23.5" y2="21.5" />
			<line className="cls-1" x1="0.5" y1="10.5" x2="23.5" y2="3.5" />
			<line className="cls-1" x1="0.5" y1="13.5" x2="23.5" y2="20.5" />
			<path className="cls-1" d="M5.5,15.022V17.6a3.5,3.5,0,0,0,7-.032v-.413" />
		</svg>
	);
}
