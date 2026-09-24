/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "hive-black": "#0a0a0a",
                "hive-white": "#ffffff",
                "hive-grey": "#ffffff", /* avoided dim gray */
                "hive-blue": "#007BFF",
                "hive-cyan": "#00E5FF",
                "neon-yellow": "#f4f000",
                "neon-pink": "#ff007f",
                "neon-green": "#00ff00",
                "neon-purple": "#a800ff",
                "neon-orange": "#ff6600",
            },
            fontFamily: {
                sora: ['Sora', 'sans-serif'],
                space: ['"Space Grotesk"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            backgroundImage: {
                'grid-network': "radial-gradient(circle, #007BFF 1px, transparent 1px)",
            },
            animation: {
                aurora: "aurora 25s linear infinite",
                blob: "blob 7s infinite",
                breathe: "breathe 10s ease-in-out infinite",
            },
            keyframes: {
                aurora: {
                    from: {
                        backgroundPosition: "50% 50%, 50% 50%",
                    },
                    to: {
                        backgroundPosition: "350% 50%, 350% 50%",
                    },
                },
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(30px, -50px) scale(1.1)",
                    },
                    "66%": {
                        transform: "translate(-20px, 20px) scale(0.9)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
                breathe: {
                    "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
                    "50%": { opacity: "1", transform: "scale(1.1)" },
                },
            },
        },
    },
    plugins: [],
}
