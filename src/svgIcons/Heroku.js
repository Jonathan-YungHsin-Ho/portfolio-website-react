import React from 'react';

const SVG = ({
	style = {},
	fill = '#000',
	width = '17.5px',
	height = '17.5px',
	className = '',
	viewBox = '0 0 214 235',
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
			transform='translate(0.000000,235.000000) scale(0.100000,-0.100000)'
			fill={fill}
			stroke='none'>
			<path
				d='M240 2227 c-47 -15 -103 -74 -118 -123 -9 -31 -12 -260 -12 -941 l0
-899 25 -50 c14 -28 40 -59 62 -74 l37 -25 836 0 836 0 37 25 c22 15 48 46 62
74 l25 50 0 899 c0 681 -3 910 -12 941 -16 52 -72 108 -124 124 -56 16 -1602
16 -1654 -1z m1651 -126 l29 -29 0 -901 0 -900 -24 -28 -24 -28 -802 0 -802 0
-24 28 -24 28 0 900 0 901 29 29 29 29 792 0 792 0 29 -29z'
			/>
			<path
				d='M597 1913 c-10 -10 -8 -913 2 -913 5 0 53 20 107 44 180 80 358 126
484 126 83 0 124 -23 139 -77 7 -23 11 -162 11 -350 l0 -313 105 0 105 0 0
333 c0 353 -5 399 -50 472 -31 51 -96 102 -157 125 -96 36 -307 23 -483 -30
-19 -5 -41 -10 -47 -10 -10 0 -13 66 -13 300 l0 300 -98 0 c-54 0 -102 -3
-105 -7z'
			/>
			<path
				d='M1336 1908 c-31 -105 -70 -196 -107 -257 l-47 -76 101 -3 102 -3 31
36 c56 63 111 184 128 278 l7 37 -106 0 c-76 0 -107 -4 -109 -12z'
			/>
			<path
				d='M590 640 l0 -211 23 18 c13 10 67 56 121 103 l97 85 -73 68 c-40 38
-94 86 -120 109 l-48 40 0 -212z'
			/>
		</g>
	</svg>
);

export default SVG;
