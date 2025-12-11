/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./App.tsx",
        "./index.tsx",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "#10b981", // Emerald 500
                    foreground: "#ffffff",
                },
                secondary: {
                    DEFAULT: "#f4f4f5", // Zinc 100
                    foreground: "#18181b", // Zinc 900
                },
                muted: {
                    DEFAULT: "#f4f4f5",
                    foreground: "#71717a",
                },
                accent: {
                    DEFAULT: "#10b981",
                    foreground: "#ffffff",
                },
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'scroll-left': 'scrollLeft 30s linear infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scrollLeft: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            }
        },
    },
    plugins: [],
}
