import React from 'react';

export default function ShowHatMagician12(props) {
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
			<title>show-hat-magician-1</title>
			<path
				className="cls-1"
				d="M8.856,7.651c1-.1,2.054-.151,3.144-.151,6.351,0,11.5,1.791,11.5,4s-5.149,4-11.5,4S.5,13.709.5,11.5c0-1,1.051-1.911,2.788-2.611"
			/>
			<ellipse className="cls-1" cx={12} cy="11.5" rx={7} ry={2} />
			<path
				className="cls-1"
				d="M18.5,16.5c0,1.105-2.634,2-6.5,2s-6.5-.895-6.5-2"
			/>
			<line className="cls-1" x1="18.5" y1="23.5" x2="18.5" y2="14.8" />
			<line className="cls-1" x1="5.5" y1="14.8" x2="5.5" y2="23.5" />
			<line className="cls-1" x1="0.5" y1="1.5" x2="2.5" y2="1.5" />
			<line className="cls-1" x1="1.5" y1="0.5" x2="1.5" y2="2.5" />
			<line className="cls-1" x1="19.5" y1={6} x2="21.5" y2={6} />
			<line className="cls-1" x1="20.5" y1={5} x2="20.5" y2={7} />
			<line className="cls-1" x1="10.5" y1="2.5" x2="12.5" y2="2.5" />
			<line className="cls-1" x1="11.5" y1="1.5" x2="11.5" y2="3.5" />
			<polygon
				className="cls-1"
				points="6 8.5 7 6.5 9 5.5 7 4.5 6 2.5 5 4.5 3 5.5 5 6.5 6 8.5"
			/>
			<line className="cls-1" x1="23.5" y1="0.5" x2={12} y2="5.5" />
		</svg>
	);
}
