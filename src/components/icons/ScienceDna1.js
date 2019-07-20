import React from 'react';

export default function ScienceDna1(props) {
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
			<title>science-dna</title>
			<path className="cls-1" d="M19.611,7.292a7.959,7.959,0,0,0,3.5-.421" />
			<path
				className="cls-1"
				d="M6.868,23.131A7.952,7.952,0,0,0,6.7,17.3,8.11,8.11,0,0,1,8.464,8.46a8.2,8.2,0,0,1,6.673-2.339"
			/>
			<path
				className="cls-1"
				d="M9.137,17.9a8.206,8.206,0,0,0,6.4-2.365A8.114,8.114,0,0,0,17.3,6.692,7.949,7.949,0,0,1,17.129.869"
			/>
			<path className="cls-1" d="M.884,17.121a7.954,7.954,0,0,1,3.728-.4" />
			<line className="cls-1" x1="12.606" y1="6.238" x2="17.758" y2="11.39" />
			<line className="cls-1" x1="16.821" y1="1.968" x2="22.028" y2="7.174" />
			<line className="cls-1" x1="1.972" y1="16.817" x2="7.179" y2="22.024" />
			<line className="cls-1" x1="9.625" y1="7.5" x2="16.497" y2="14.371" />
			<line className="cls-1" x1="6.242" y1="12.601" x2="11.394" y2="17.754" />
			<line className="cls-1" x1="7.503" y1="9.621" x2="14.375" y2="16.492" />
		</svg>
	);
}
