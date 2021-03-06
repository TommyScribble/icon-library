import React from 'react';

export default function FilterPicture2(props) {
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
			<title>filter-picture</title>
			<rect
				className="a"
				x="3.749"
				y="0.75"
				width="19.5"
				height="19.5"
				rx="1.5"
				ry="1.5"
			/>
			<path className="a" d="M20.249,23.25h-18a1.5,1.5,0,0,1-1.5-1.5v-18" />
			<path d="M8.623,6A1.125,1.125,0,1,0,9.748,7.125,1.125,1.125,0,0,0,8.623,6Z" />
			<path
				className="a"
				d="M20.249,15.75,16.38,9.913A.75.75,0,0,0,15.141,9.9L13.146,12.75l-1.236-.989a.749.749,0,0,0-1.093.17L8.271,15.75Z"
			/>
		</svg>
	);
}
