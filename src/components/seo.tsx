/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
    description?: string
    title: string
    children: object
}

const Seo = ({ description, title, children }: SEOProps) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        ogImageUrl
                    }
                }
            }
        `,
    )

    const metaDescription = description || site.siteMetadata.description

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={metaDescription} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={site.siteMetadata.ogImageUrl} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content={site.siteMetadata.author} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaDescription} />
            {children}
        </>
    )
}

Seo.defaultProps = {
    description: ``,
}

Seo.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string.isRequired,
    children: PropTypes.any,
}

export default Seo
