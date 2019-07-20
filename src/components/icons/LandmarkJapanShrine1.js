import React from 'react';

export default function LandmarkJapanShrine1(props) {
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
			<title>landmark-japan-shrine</title>
			<path
				className="cls-1"
				d="M21.114,5.84a.5.5,0,0,1-.474.342H3.36a.5.5,0,0,1-.474-.342L1.432,1.477a.5.5,0,0,1,.71-.6A20.944,20.944,0,0,0,12,3.182a20.944,20.944,0,0,0,9.858-2.3.5.5,0,0,1,.71.6Z"
			/>
			<path
				className="cls-1"
				d="M8,6.182v16.5a.5.5,0,0,1-.5.5H5.562a.5.5,0,0,1-.5-.559L7,6.182"
			/>
			<path
				className="cls-1"
				d="M16,6.182v16.5a.5.5,0,0,0,.5.5h1.938a.5.5,0,0,0,.5-.559L17,6.182"
			/>
			<line className="cls-1" x1={12} y1="6.182" x2={12} y2="11.182" />
			<line className="cls-1" x1={8} y1="11.182" x2={16} y2="11.182" />
			<line className="cls-1" x1="17.588" y1="11.182" x2={20} y2="11.182" />
			<line className="cls-1" x1="6.412" y1="11.182" x2={4} y2="11.182" />
		</svg>
	);
}
