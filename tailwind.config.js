/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            black: '#0a0a0a',
            neutral: {
                200: '#131313',
                300: '#242424',
                400: '#353535',
                500: '#505050',
                700: '#a3a3a3',
            },
            white: '#ffffff',
            yellow: {
                100: '#AB893A',
                400: '#CDB273',
                900: '#DDDCD9',
            },
            status: {
                red: '#D33B3B',
                green: '#74BE39',
            },
        },
        backgroundImage: {
            authLeft: "url('/images/bg-scales-left.png')",
            authRight: "url('/images/bg-scales-right.png')",
            gradient: 'linear-gradient(to bottom, #353535, #242424)',
            gradientHover: 'linear-gradient(to top, #353535, #242424)',
        },
    },
    plugins: [],
};
