import React, { Fragment } from 'react';

import estrutura from '../../assets/estrutura.png';
import estrutura2 from '../../assets/Imagem-projeto.svg';

export default function HeroIllustration() {
	return (
		<>
			<div className="hero-ball hero-ball-1 is-revealing">
				<svg
					width="400"
					height="400"
					viewBox="0 0 400 400"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<radialGradient
							cx="56.15%"
							cy="27.43%"
							fx="56.15%"
							fy="27.43%"
							r="57.526%"
							gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
							id="ball-1-a"
						>
							<stop stopColor="#F8F7FF" offset="0%" />
							<stop stopColor="#DAD8FF" offset="34.827%" />
							<stop stopColor="#9B95F3" offset="100%" />
						</radialGradient>
						<filter
							x="-500%"
							y="-500%"
							width="1000%"
							height="1000%"
							filterUnits="objectBoundingBox"
							id="dropshadow-ball-1"
						>
							<feOffset
								dx="24"
								dy="24"
								in="SourceAlpha"
								result="shadowOffsetOuter"
							/>
							<feGaussianBlur
								stdDeviation="24"
								in="shadowOffsetOuter"
								result="shadowBlurOuter"
							/>
							<feColorMatrix
								values="0 0 0 0 0.10 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.22 0"
								in="shadowBlurOuter"
							/>
						</filter>
					</defs>
					<circle
						cx="200"
						cy="200"
						r="200"
						fill="#FFF"
						fillRule="evenodd"
						filter="url(#dropshadow-ball-1)"
					/>
					<circle
						cx="200"
						cy="200"
						r="200"
						fill="url(#ball-1-a)"
						fillRule="evenodd"
					/>
				</svg>
			</div>
			<div className="hero-ball hero-ball-2 is-revealing">
				<svg
					width="200"
					height="200"
					viewBox="0 0 200 200"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<radialGradient
							cx="56.15%"
							cy="27.43%"
							fx="56.15%"
							fy="27.43%"
							r="57.526%"
							gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
							id="ball-2-a"
						>
							<stop stopColor="#F8F7FF" offset="0%" />
							<stop stopColor="#DAD8FF" offset="34.827%" />
							<stop stopColor="#9B95F3" offset="100%" />
						</radialGradient>
						<filter
							x="-500%"
							y="-500%"
							width="1000%"
							height="1000%"
							filterUnits="objectBoundingBox"
							id="dropshadow-ball-2"
						>
							<feOffset
								dx="24"
								dy="24"
								in="SourceAlpha"
								result="shadowOffsetOuter"
							/>
							<feGaussianBlur
								stdDeviation="24"
								in="shadowOffsetOuter"
								result="shadowBlurOuter"
							/>
							<feColorMatrix
								values="0 0 0 0 0.10 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.22 0"
								in="shadowBlurOuter"
							/>
						</filter>
					</defs>
					<circle
						cx="100"
						cy="100"
						r="100"
						fill="#FFF"
						fillRule="evenodd"
						filter="url(#dropshadow-ball-2)"
					/>
					<circle
						cx="100"
						cy="100"
						r="100"
						fill="url(#ball-2-a)"
						fillRule="evenodd"
					/>
				</svg>
			</div>
			<div className="hero-illustration-browser is-revealing teste">
				<img src={estrutura} className="estrutura-img" alt="" />

				<svg
					width="800"
					height="450"
					viewBox="0 0 800 450"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="browser-a">
							<stop stopColor="#F89595" offset="0%" />
							<stop stopColor="#EF5C5C" offset="100%" />
						</linearGradient>
						<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="browser-b">
							<stop stopColor="#FFDFB0" offset="0%" />
							<stop stopColor="#FFBB78" offset="100%" />
						</linearGradient>
						<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="browser-c">
							<stop stopColor="#83E78D" offset="0%" />
							<stop stopColor="#4BCA55" offset="100%" />
						</linearGradient>
					</defs>
					<g fill="none" fillRule="evenodd">
						<rect width="800" height="450" rx="2" fill="#FFF" />
						<path fill="#DDE7EF" d="M0 32h800v1H0z" />
						<pattern id="imgPillar01" x="0" y="0" width="1" height="1">
							<image
								width="100%"
								xlinkHref="https://i.stack.imgur.com/KKm5N.jpg"
								preserveAspectRatio="none"
							/>
						</pattern>
						<circle fill="url(#browser-a)" cx="24" cy="16" r="4" />
						<circle fill="url(#browser-b)" cx="40" cy="16" r="4" />
						<circle fill="url(#browser-c)" cx="56" cy="16" r="4" />
					</g>
				</svg>
			</div>
			<div className="hero-ball hero-ball-3 is-revealing">
				<svg
					width="80"
					height="80"
					viewBox="0 0 80 80"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<radialGradient
							cx="56.15%"
							cy="27.43%"
							fx="56.15%"
							fy="27.43%"
							r="57.526%"
							gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
							id="ball-3-a"
						>
							<stop stopColor="#F8F7FF" offset="0%" />
							<stop stopColor="#DAD8FF" offset="34.827%" />
							<stop stopColor="#9B95F3" offset="100%" />
						</radialGradient>
						<filter
							x="-500%"
							y="-500%"
							width="1000%"
							height="1000%"
							filterUnits="objectBoundingBox"
							id="dropshadow-ball-3"
						>
							<feOffset
								dx="24"
								dy="24"
								in="SourceAlpha"
								result="shadowOffsetOuter"
							/>
							<feGaussianBlur
								stdDeviation="24"
								in="shadowOffsetOuter"
								result="shadowBlurOuter"
							/>
							<feColorMatrix
								values="0 0 0 0 0.10 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.22 0"
								in="shadowBlurOuter"
							/>
						</filter>
					</defs>
					<circle
						cx="40"
						cy="40"
						r="40"
						fill="#FFF"
						fillRule="evenodd"
						filter="url(#dropshadow-ball-3)"
					/>
					<circle
						cx="40"
						cy="40"
						r="40"
						fill="url(#ball-3-a)"
						fillRule="evenodd"
					/>
				</svg>
			</div>
			<div className="hero-ball hero-ball-4 is-revealing">
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<radialGradient
							cx="56.15%"
							cy="27.43%"
							fx="56.15%"
							fy="27.43%"
							r="57.526%"
							gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
							id="ball-4-a"
						>
							<stop stopColor="#F8F7FF" offset="0%" />
							<stop stopColor="#DAD8FF" offset="34.827%" />
							<stop stopColor="#9B95F3" offset="100%" />
						</radialGradient>
						<filter
							x="-500%"
							y="-500%"
							width="1000%"
							height="1000%"
							filterUnits="objectBoundingBox"
							id="dropshadow-ball-4"
						>
							<feOffset
								dx="24"
								dy="24"
								in="SourceAlpha"
								result="shadowOffsetOuter"
							/>
							<feGaussianBlur
								stdDeviation="24"
								in="shadowOffsetOuter"
								result="shadowBlurOuter"
							/>
							<feColorMatrix
								values="0 0 0 0 0.10 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.22 0"
								in="shadowBlurOuter"
							/>
						</filter>
					</defs>
					<circle
						cx="20"
						cy="20"
						r="20"
						fill="#FFF"
						fillRule="evenodd"
						filter="url(#dropshadow-ball-4)"
					/>
					<circle
						cx="20"
						cy="20"
						r="20"
						fill="url(#ball-4-a)"
						fillRule="evenodd"
					/>
				</svg>
			</div>
			<div className="hero-ball hero-ball-5 is-revealing">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<radialGradient
							cx="56.15%"
							cy="27.43%"
							fx="56.15%"
							fy="27.43%"
							r="57.526%"
							gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
							id="ball-5-a"
						>
							<stop stopColor="#F8F7FF" offset="0%" />
							<stop stopColor="#DAD8FF" offset="34.827%" />
							<stop stopColor="#9B95F3" offset="100%" />
						</radialGradient>
						<filter
							x="-500%"
							y="-500%"
							width="1000%"
							height="1000%"
							filterUnits="objectBoundingBox"
							id="dropshadow-ball-5"
						>
							<feOffset
								dx="24"
								dy="24"
								in="SourceAlpha"
								result="shadowOffsetOuter"
							/>
							<feGaussianBlur
								stdDeviation="24"
								in="shadowOffsetOuter"
								result="shadowBlurOuter"
							/>
							<feColorMatrix
								values="0 0 0 0 0.10 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.22 0"
								in="shadowBlurOuter"
							/>
						</filter>
					</defs>
					<circle
						cx="12"
						cy="12"
						r="12"
						fill="#FFF"
						fillRule="evenodd"
						filter="url(#dropshadow-ball-5)"
					/>
					<circle
						cx="12"
						cy="12"
						r="12"
						fill="url(#ball-5-a)"
						fillRule="evenodd"
					/>
				</svg>
			</div>
		</>
	);
}
