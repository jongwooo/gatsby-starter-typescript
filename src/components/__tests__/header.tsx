import React from "react"
import renderer from "react-test-renderer"

import Header from "../header"

describe("Header", () => {
    it("renders correctly", () => {
        const tree = renderer.create(<Header siteTitle="Gatsby’s TypeScript Starter" />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
