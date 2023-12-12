/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				dark: '#97CB29',
				darker: '#1A1A1A',
				light: '#FFFFFF',
				gris: '#C39F65',
				"gris-light": '#F4F4F4',
				purple: '#382213',
			},
			container: {
				center: true,
			},
		}
	},
	plugins: [],
}
