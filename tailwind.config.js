/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "void-black": "#030303",
                "hologram-blue": "#2EB9DF",
                "neon-purple": "#9D00FF",
                "glass-border": "rgba(255, 255, 255, 0.1)",
            },
            fontFamily: {
                sans: ['Space Grotesk', 'Inter', 'sans-serif'],
                display: ['Clash Display', 'Syne', 'sans-serif'],
            },
            backgroundImage: {
                "cyber-grid": "radial-gradient(circle, rgba(46, 185, 223, 0.1) 1px, transparent 1px)",
            },
            backdropBlur: {
                xs: '2px',
                xxl: '40px',
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
                'spin-slow-reverse': 'spin 25s linear infinite reverse',
                'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glitch': 'glitch 1s linear infinite',
            },
            keyframes: {
                glitch: {
                    '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
                    '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
                    '62%': { transform: 'translate(0,0) skew(5deg)' },
                }
            }
        },
    },
    plugins: [],
}
