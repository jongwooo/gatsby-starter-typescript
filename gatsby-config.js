module.exports = {
    siteMetadata: {
        title: `Gatsby Starter TypeScript`,
        description: `TypeScript version of the default Gatsby starter`,
        author: `@jongwooo`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://typescriptstarter.gatsbyjs.io`,
                stripQueryString: true,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-react-helmet-async`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-typescript`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
