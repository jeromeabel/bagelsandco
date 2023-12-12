/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Avenir Regular', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: '#97CB29',
				black: '#1A1A1A', 
				white: '#FFFFFF', 
				secondary: '#C39F65',
				'secondary-accent': '#382213', 
				'grey-light': '#F4F4F4',
			},
			container: {
				center: true,
			},
		}
	},
	plugins: [],
}
