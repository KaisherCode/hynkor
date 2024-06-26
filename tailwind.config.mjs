/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		textColorcolor:{
			'primary':'#00A99D',
			'secondary':'#F72585',
			'terciary':'#7209B7',
			'quarter':'#4361ee',
			'accent':'#3A0CA3',
		},
		backgroundColor: theme=>({
			...theme('colors'),
			'primary':'#00A99D',
			'secondary':'#F72585',
			'terciary':'#7209B7',
			'quarter':'#4361ee',
			'accent':'#3A0CA3',
		}),
		extend: {},
	},
	plugins: [],
}
