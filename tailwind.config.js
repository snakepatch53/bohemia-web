import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            xs: "300px",
            ...defaultTheme.screens,
        },
        extend: {
            fontFamily: {
                title: ["title", "sans-serif"],
                title2: ["title2", "sans-serif"],
            },
        },
    },
    plugins: [],
};
