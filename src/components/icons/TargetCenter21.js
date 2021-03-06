import React from 'react';

export default function TargetCenter21(props) {
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
			<title>target-center-2</title>
			<line className="a" x1="11.015" y1="11.859" x2="15.182" y2="7.692" />
			<polygon
				className="a"
				points="15.182 7.692 15.75 3.942 18.998 0.75 19.5 3.374 22.124 3.876 18.932 7.124 15.182 7.692"
			/>
			<path className="a" d="M21.054,9.513A9.75,9.75,0,1,1,12.613,2.3" />
			<path className="a" d="M16.721,10.737a5.251,5.251,0,1,1-5.1-3.987" />
			<line className="a" x1="6.515" y1="20.25" x2="5.765" y2="23.25" />
			<line className="a" x1="17.015" y1="20.25" x2="17.765" y2="23.25" />
		</svg>
	);
}
