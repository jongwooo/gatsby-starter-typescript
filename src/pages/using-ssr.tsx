import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

interface serverDataProps {
    message: string
}

interface SSRProps {
    serverData: serverDataProps
}

const UsingSSR = ({ serverData }: SSRProps) => {
    return (
        <Layout>
            <Seo title="Using SSR" />
            <h1>
                This page is <b>rendered server-side</b>
            </h1>
            <p>
                This page is rendered server side every time the page is requested. Reload it to see a(nother) random
                photo from <code>dog.ceo/api/breed/shiba/images/random</code>:
            </p>
            <img
                style={{ width: "320px", borderRadius: "var(--border-radius)" }}
                alt="A random dog"
                src={serverData.message}
            />
            <p>
                To learn more, head over to our{" "}
                <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/">
                    documentation about Server Side Rendering
                </a>
                .
            </p>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    )
}

export default UsingSSR

export async function getServerData() {
    try {
        const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`)
        return {
            props: await res.json(),
        }
    } catch (error) {
        return {
            status: 500,
            headers: {},
            props: {},
        }
    }
}