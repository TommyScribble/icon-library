import React from 'react';

export default function TargetCenter22(props) {
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
			<title>target-center-2</title>
			<circle className="cls-1" cx="9.002" cy="14.998" r="4.5" />
			<circle className="cls-1" cx="9.002" cy="14.998" r="8.5" />
			<line className="cls-1" x1="0.502" y1="23.498" x2="2.992" y2="21.008" />
			<line className="cls-1" x1="15.013" y1="21.008" x2="17.502" y2="23.498" />
			<polygon
				className="cls-1"
				points="16.427 7.573 16.073 3.684 19.255 0.502 20.316 3.684 23.498 4.745 20.316 7.927 16.427 7.573"
			/>
			<line className="cls-1" x1="19.002" y1="4.998" x2="9.002" y2="14.998" />
		</svg>
	);
}
