const postcssGlobalData = require("@csstools/postcss-global-data");

module.exports = {
    plugins: [
        postcssGlobalData({
            files: ["./src/styles/core/tokens/layout.css"],
        }),
        require("postcss-nesting"),
        require("postcss-custom-media")({
            preserve: true,
        }),
        require("autoprefixer"),
    ],
};
