import React from 'react';

export default function Hammer11(props) {
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
			<title>hammer-1</title>
			<path
				className="cls-1"
				d="M13.631,12.058,3.925,21.764a2.006,2.006,0,1,1-2.837-2.837l9.706-9.706"
			/>
			<path
				className="cls-1"
				d="M22.142,8.511a.5.5,0,0,0-.709,0A1.5,1.5,0,0,1,18.969,6.9a1.007,1.007,0,0,0-.224-1.076c-.826-.828-2.275-2.276-2.293-2.258a7.318,7.318,0,0,0-9.409-.4.5.5,0,0,0,.32.9A5.486,5.486,0,0,1,11.5,5.674c.689.69,1.32,1.519.631,2.208l-1.34,1.339,2.837,2.837,1.419-1.419a1.5,1.5,0,1,1,2.127,2.128.5.5,0,0,0,0,.709l1.064,1.064a1,1,0,0,0,1.419,0l3.546-3.546a1,1,0,0,0,0-1.419Z"
			/>
			<line className="cls-1" x1="21.433" y1="8.512" x2="17.177" y2="12.767" />
		</svg>
	);
}