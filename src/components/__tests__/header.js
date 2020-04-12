/* eslint-disable no-unused-vars */
import * as React from "react";
import * as renderer from "react-test-renderer";

import Header from "../header";

describe("Header", () => {
	it("renders correctly", () => {
		const tree = renderer
			.create(<Header siteTitle="Gatsby Starter TypeScript" />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
