import React from 'react';

export default function FilterPicture(props) {
	return (
		<svg
			id="Bold"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			{...props}
		>
			<title>filter-picture</title>
			<path d="M22,0H5.5a2,2,0,0,0-2,2V18.5a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V2A2,2,0,0,0,22,0ZM9.667,12.437a1,1,0,0,1,1.726-.109l.831,1.246a.25.25,0,0,0,.428-.02l2.437-4.527A.979.979,0,0,1,16,8.5a1,1,0,0,1,.877.574l3.578,7.6A.5.5,0,0,1,20,17.39H8a.5.5,0,0,1-.447-.724ZM7.75,6.25a2,2,0,1,1,2,2A2,2,0,0,1,7.75,6.25Z" />
			<path d="M19.5,22H2.5a.5.5,0,0,1-.5-.5V4.5a1,1,0,0,0-2,0V22a2,2,0,0,0,2,2H19.5a1,1,0,0,0,0-2Z" />
		</svg>
	);
}
