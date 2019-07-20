import React from 'react';

export default function ContentInkPenWrite(props) {
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
			<title>content-ink-pen-write</title>
			<path
				className="cls-1"
				d="M18.328,5.671a4,4,0,0,0-5.657,0c-1.1,1.1-2.491,5.695-3.083,7.983a.622.622,0,0,0,.758.758c2.288-.592,6.878-1.98,7.982-3.084A4,4,0,0,0,18.328,5.671Z"
			/>
			<circle className="cls-1" cx="15.5" cy="8.5" r={1} />
			<line className="cls-1" x1="14.796" y1="9.204" x2="9.75" y2="14.25" />
			<polygon
				className="cls-1"
				points="19.5 0.5 23.5 4.5 21 6 18 3 19.5 0.5"
			/>
			<line className="cls-1" x1="17.5" y1={5} x2="18.5" y2="3.5" />
			<line className="cls-1" x1="20.5" y1="5.5" x2={19} y2="6.5" />
			<path
				className="cls-1"
				d="M8,15.5H4.5a2,2,0,0,0,0,4h12a2,2,0,0,1,0,4H.5"
			/>
		</svg>
	);
}
