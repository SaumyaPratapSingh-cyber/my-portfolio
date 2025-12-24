/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "deep-space": "#050505",
                "neon-purple": "#b026ff",
                "neon-cyan": "#00f3ff",
                "neon-pink": "#ff0099",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Clash Display', 'Syne', 'sans-serif'],
            },
            backgroundImage: {
                "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
            },
            backdropBlur: {
                xs: '2px',
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
                'spin-slow-reverse': 'spin 25s linear infinite reverse',
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(176, 38, 255, 0.5)' },
                    '50%': { opacity: .5, boxShadow: '0 0 10px rgba(176, 38, 255, 0.2)' },
                }
            }
        },
    },
    plugins: [],
}
