const metaConfig = require("./gatsby-meta-config")

module.exports = {
    siteMetadata: metaConfig,
    plugins: [
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `${metaConfig.siteUrl}`,
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
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                host: `${metaConfig.siteUrl}`,
                sitemap: `${metaConfig.siteUrl}/sitemap-index.xml`,
                policy: [
                    {
                        userAgent: "*",
                        allow: "/",
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                output: "/",
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        `gatsby-plugin-image`,
        `gatsby-plugin-react-helmet-async`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-typescript`,
        `gatsby-transformer-sharp`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
