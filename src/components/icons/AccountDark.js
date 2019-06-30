import React from 'react';

const AccountDark = props => {
	const { fill, width } = props;

	const style = {
		width: `${width}`,
	};

	return (
		<div style={style}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 141.73 141.73"
			>
				<path
					d="M60.48 74h3.63v3.63h-3.63zm10.9 0H75v3.63h-3.63z"
					fill={fill}
				/>
				<defs>
					<path id="A" d="M44.13 41.28h47.25v54.54H44.13z" />
				</defs>
				<clipPath id="B">
					<use xlinkHref="#A" />
				</clipPath>
				<path
					d="M87.74 75.1c0 .98-.8 1.78-1.82 1.78h-3.64l.03.78h-.02c0 8.03-6.5 14.54-14.54 14.54S53.2 85.68 53.2 77.65h-.01l.02-.78h-3.64c-1 0-1.82-.8-1.82-1.78v-5.34h7.27a9.12 9.12 0 0 0 7.27-3.61 9.12 9.12 0 0 0 7.27 3.61h18.17v5.34zm0-8.9H69.57c-3 0-5.45-2.4-5.45-5.34H60.5c0 2.94-2.45 5.34-5.45 5.34h-7.27V64.4c0-10.8 8.97-19.57 20-19.57s20 8.78 20 19.57v1.78zm3.63 8.9V64.4c0-12.75-10.6-23.13-23.62-23.13-13.03 0-23.63 10.38-23.63 23.13V75.1c0 2.94 2.45 5.34 5.45 5.34h.23c1.34 8.72 8.85 15.4 17.95 15.4s16.6-6.68 17.94-15.4h.23c3 0 5.45-2.4 5.45-5.34"
					clip-path="url(#B)"
					fill={fill}
				/>
			</svg>
		</div>
	);
};

export default AccountDark;
