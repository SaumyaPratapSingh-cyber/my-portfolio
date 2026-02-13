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
                "hive-grey": "#e5e5e5",
                "hive-blue": "#007BFF",
                "hive-cyan": "#00E5FF",
            },
            fontFamily: {
                sora: ['Sora', 'sans-serif'],
                space: ['"Space Grotesk"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            backgroundImage: {
                'grid-network': "radial-gradient(circle, #007BFF 1px, transparent 1px)",
            },
        },
    },
    plugins: [],
}
