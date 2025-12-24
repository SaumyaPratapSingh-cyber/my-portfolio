/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "matte-black": "#0a0a0a",
                "charcoal": "#121212",
                "acid-green": "#ccff00",
                "electric-blue": "#00f0ff",
                "soft-white": "#f0f0f0",
                "glass-border": "rgba(255, 255, 255, 0.08)",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Clash Display', 'Syne', 'sans-serif'],
            },
            backgroundImage: {
                "subtle-grid": "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
            },
            backdropBlur: {
                xs: '2px',
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
                'spin-slow-reverse': 'spin 25s linear infinite reverse',
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(204, 255, 0, 0.5)' },
                    '50%': { opacity: .5, boxShadow: '0 0 10px rgba(204, 255, 0, 0.2)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
