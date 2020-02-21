import React from 'react';

const SVG = ({
	style = {},
	fill = '#000',
	width = '17.5px',
	height = '17.5px',
	className = '',
	viewBox = '0 0 200 190',
}) => (
	<svg
		version='1.0'
		xmlns='http://www.w3.org/2000/svg'
		style={style}
		// width='200.000000pt'
		width={width}
		// height='190.000000pt'
		height={height}
		// viewBox='0 0 200.000000 190.000000'
		viewBox={viewBox}
		className={`svg-icon ${className || ''}`}
		preserveAspectRatio='xMidYMid meet'>
		<metadata>
			Created by potrace 1.15, written by Peter Selinger 2001-2017
		</metadata>
		<g
			transform='translate(0.000000,190.000000) scale(0.100000,-0.100000)'
			fill={fill}
			stroke='none'>
			<path
				fill={fill}
				d='M885 1888 c-92 -17 -193 -74 -271 -152 -83 -84 -122 -149 -163 -271
-81 -245 -59 -514 63 -769 37 -77 42 -94 34 -118 -30 -84 44 -178 139 -178
148 0 184 207 46 266 -18 8 -43 14 -56 14 -20 0 -30 14 -65 88 -144 304 -110
683 78 882 109 116 309 161 437 99 113 -55 213 -205 247 -373 13 -63 19 -68
107 -89 l26 -7 -9 63 c-38 283 -210 499 -436 546 -61 13 -107 13 -177 -1z'
			/>
			<path
				fill={fill}
				d='M817 1306 c-51 -19 -63 -31 -83 -82 -22 -58 -8 -110 41 -153 29 -25
44 -31 83 -31 52 0 104 26 122 61 12 21 16 22 119 16 125 -6 235 -34 347 -86
209 -98 344 -236 411 -419 21 -56 24 -80 21 -147 -3 -67 -10 -90 -37 -143 -41
-75 -103 -135 -179 -170 -52 -25 -68 -27 -172 -26 -89 0 -129 5 -179 22 l-64
21 -54 -42 -54 -42 48 -21 c117 -52 296 -68 422 -39 148 35 294 144 346 257
43 95 50 257 14 367 -35 108 -123 238 -222 327 -177 159 -392 245 -656 261
-99 6 -106 8 -129 34 -13 16 -40 33 -60 39 -44 12 -38 12 -85 -4z'
			/>
			<path
				fill={fill}
				d='M222 955 c-111 -101 -179 -215 -206 -347 -20 -94 -20 -134 -2 -220
40 -185 163 -307 357 -353 169 -39 405 2 596 105 153 82 284 208 369 355 27
46 53 84 57 85 30 1 77 36 97 71 66 118 -61 253 -180 192 -54 -28 -83 -78 -77
-136 2 -26 12 -56 22 -67 17 -19 17 -22 -16 -76 -96 -161 -310 -327 -507 -395
-197 -68 -429 -31 -527 84 -148 173 -120 411 70 590 l51 49 -15 59 c-9 32 -18
59 -22 59 -3 0 -33 -25 -67 -55z'
			/>
		</g>
	</svg>
);

export default SVG;