import React from 'react';

export default function ContentInkPenWrite2(props) {
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
			<title>content-ink-pen-write</title>
			<path
				className="a"
				d="M23.249,6.053a1.5,1.5,0,0,1-2.121,0L17.946,2.871a1.5,1.5,0,0,1,0-2.121"
			/>
			<path
				className="a"
				d="M17.677,11.626c-1.406,1.405-6.47,1.166-6.47,1.166s-.239-5.064,1.167-6.47a3.677,3.677,0,0,1,5.2.106A3.679,3.679,0,0,1,17.677,11.626Z"
			/>
			<path d="M15.221,7.675A1.125,1.125,0,1,0,16.346,8.8a1.125,1.125,0,0,0-1.125-1.125Z" />
			<path
				className="a"
				d="M.749,23.25H21a2.25,2.25,0,0,0,0-4.5H6a2.25,2.25,0,1,1,0-4.5h2.25"
			/>
		</svg>
	);
}
