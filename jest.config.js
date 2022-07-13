module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    transform: {
        "^.+\\.[jt]sx?$": "<rootDir>/jest-preprocess.js",
    },
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
        ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
        "^gatsby-page-utils/(.*)$": `gatsby-page-utils/$1`,
    },
    testPathIgnorePatterns: [`node_modules`, `<rootDir>.*/.cache`, `<rootDir>.*/public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby|gatsby-link|gatsby-script)/)`],
    globals: {
        __PATH_PREFIX__: "",
    },
    testEnvironmentOptions: {
        url: "http://localhost",
    },
    setupFiles: [`<rootDir>/loadershim.js`],
}
