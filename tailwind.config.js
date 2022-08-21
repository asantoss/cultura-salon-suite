/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				primary: { DEFAULT: '#9A6B5B', light: '#ddcabc' },

				background: '#F8F8F9',
				secondary: '#3B372F',
				primaryText: '#4A3121'
			}
		}
	},
	plugins: []
};
