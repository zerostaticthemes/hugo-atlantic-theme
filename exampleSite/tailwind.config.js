module.exports = {
    content: ["./**/*.html"],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px"
        }
    },
    plugins: [require("@tailwindcss/typography")]
};
