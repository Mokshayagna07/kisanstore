/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#4ade80', // green-400
                    DEFAULT: '#16a34a', // green-600
                    dark: '#15803d', // green-700
                },
                secondary: {
                    DEFAULT: '#334155', // slate-700
                },
                accent: {
                    DEFAULT: '#f59e0b', // amber-500
                    hover: '#d97706', // amber-600
                },
                background: {
                    light: '#f8fafc',
                    dark: '#0f172a'
                },
                surface: {
                    light: '#ffffff',
                    dark: '#1e293b'
                }
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
