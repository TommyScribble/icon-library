import React from 'react';

export default function TabletTouch(props) {
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
			<title>tablet-touch</title>
			<path
				className="cls-1"
				d="M6.5,17.5h-4a2,2,0,0,1-2-2V2.5a2,2,0,0,1,2-2h19a2,2,0,0,1,2,2V15"
			/>
			<line className="cls-1" x1="4.5" y1="17.499" x2="4.5" y2="0.499" />
			<path
				className="cls-1"
				d="M2.75,8.749A.25.25,0,0,1,3,9H3a.25.25,0,0,1-.25.25h0A.25.25,0,0,1,2.5,9h0a.25.25,0,0,1,.25-.25"
			/>
			<line className="cls-1" x1="2.75" y1="8.749" x2="2.75" y2="8.749" />
			<path
				className="cls-1"
				d="M12.653,23.5,8.847,18.922A1.5,1.5,0,1,1,11.154,17L13.5,19.827V10a1.5,1.5,0,0,1,3,0v6.5h3a4,4,0,0,1,4,4v3"
			/>
			<line className="cls-1" x1="21.5" y1="7.499" x2="21.5" y2="10.499" />
		</svg>
	);
}
