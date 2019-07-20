import React from 'react';

export default function Like12(props) {
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
			<title>like-1</title>
			<path
				className="cls-1"
				d="M20,15.659h0a1.5,1.5,0,1,1,0,3H19a1.5,1.5,0,0,1,1.5,1.5c0,.829-.672,1-1.5,1H12.5c-2.851,0-3.5-.5-7-1v-8.5c2.45,0,6.5-4.5,6.5-8.5,0-1.581,2.189-2.17,3,.719.5,1.781-1,5.281-1,5.281h8a1.5,1.5,0,0,1,1.5,1.5c0,.829-.672,2-1.5,2H21a1.5,1.5,0,0,1,0,3H20"
			/>
			<rect className="cls-1" x="0.5" y="10.159" width={5} height={12} />
			<line className="cls-1" x1="3.25" y1="19.659" x2="3.25" y2="19.659" />
			<path
				className="cls-1"
				d="M3.25,19.659a.25.25,0,1,0,.25.25.25.25,0,0,0-.25-.25"
			/>
		</svg>
	);
}
