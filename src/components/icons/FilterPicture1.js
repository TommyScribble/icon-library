import React from 'react';

export default function FilterPicture1(props) {
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
			<title>filter-picture</title>
			<path
				className="cls-1"
				d="M23.5,1.5a1,1,0,0,0-1-1H4.5a1,1,0,0,0-1,1v18a1,1,0,0,0,1,1h18a1,1,0,0,0,1-1Z"
			/>
			<path
				className="cls-1"
				d="M21,16.5,18.343,9.414a.5.5,0,0,0-.884-.1L14,14.5l-2.049-2.459a.5.5,0,0,0-.813.063L8.5,16.5"
			/>
			<circle className="cls-1" cx={10} cy={6} r="1.5" />
			<line className="cls-1" x1="23.5" y1="16.5" x2="3.5" y2="16.5" />
			<path
				className="cls-1"
				d="M3.5,4.5h-2a1,1,0,0,0-1,1v17a1,1,0,0,0,1,1h17a1,1,0,0,0,1-1v-2"
			/>
		</svg>
	);
}
