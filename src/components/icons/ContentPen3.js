import React from 'react';

export default function ContentPen3(props) {
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
			<title>content-pen-3</title>
			<path
				className="a"
				d="M22.375,5.844,8.134,20.085l-4.22-4.22L18.042,1.737a3.1,3.1,0,0,1,3.95-.438A2.985,2.985,0,0,1,22.375,5.844Z"
			/>
			<path
				className="a"
				d="M18.156,1.624a2.985,2.985,0,0,0-4.22,0L10.771,4.789"
			/>
			<line className="a" x1="14.463" y1="5.316" x2="18.683" y2="9.536" />
			<polygon
				className="a"
				points="0.749 23.25 3.914 15.866 8.134 20.085 0.749 23.25"
			/>
		</svg>
	);
}
