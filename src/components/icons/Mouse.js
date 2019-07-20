import React from 'react';

export default function Mouse(props) {
	return (
		<svg
			id="Bold"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			{...props}
		>
			<title>mouse</title>
			<path d="M23,1.317a1,1,0,0,0-1,1V7.991C22,10.07,20.8,11,19.6,11s-2.4-.93-2.4-3.009V5.627C17.206,1.462,13.622,0,11.218,0,8.42,0,5.6,1.719,5.508,5H3.5A3.5,3.5,0,0,0,0,8.5v9a6.5,6.5,0,0,0,13,0v-9A3.5,3.5,0,0,0,9.5,5H7.517c.094-2.054,1.955-3,3.7-3,.39,0,3.988.143,3.988,3.627V7.991c0,3.289,2.212,5.009,4.4,5.009S24,11.28,24,7.991V2.317A1,1,0,0,0,23,1.317Zm-15,9.8A1.449,1.449,0,0,1,6.5,12.5,1.449,1.449,0,0,1,5,11.112V8.889A1.449,1.449,0,0,1,6.5,7.5,1.449,1.449,0,0,1,8,8.889Z" />
		</svg>
	);
}
