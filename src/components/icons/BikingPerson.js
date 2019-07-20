import React from 'react';

export default function BikingPerson(props) {
	return (
		<svg
			id="Bold"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			{...props}
		>
			<title>biking-person</title>
			<circle cx="14.5" cy="3.688" r="2.375" />
			<path d="M4.5,13.688a4.5,4.5,0,1,0,4.5,4.5A4.5,4.5,0,0,0,4.5,13.688Zm0,7a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,4.5,20.688Z" />
			<path d="M19.5,13.688a4.5,4.5,0,1,0,4.5,4.5A4.5,4.5,0,0,0,19.5,13.688Zm0,7a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,19.5,20.688Z" />
			<path d="M10.908,11.59a.249.249,0,0,1-.021-.351l1.142-1.307a.251.251,0,0,1,.323-.046,8.271,8.271,0,0,0,4.476,1.3H17.5a1.5,1.5,0,0,0,0-3h-.672a5.368,5.368,0,0,1-3.768-1.56,1.409,1.409,0,0,0-1.11-.439,1.5,1.5,0,0,0-1.079.512l-3.5,4a1.5,1.5,0,0,0-.358,1.185c.107.8.664,1.056,1.319,1.493a5.261,5.261,0,0,1,2.2,5.484,1.5,1.5,0,1,0,2.928.65A8.287,8.287,0,0,0,10.908,11.59Z" />
		</svg>
	);
}
