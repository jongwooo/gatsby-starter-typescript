<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>

<h1 align="center">
  Gatsby's starter with TypeScript
</h1>

<h3 align="center">
  ⚛️ 📄 🚀
</h3>

<h3 align="center">
  TypeScript version of the default Gatsby starter
</h3>

<p align="center">
  The <a href="https://github.com/gatsbyjs/gatsby-starter-default">default Gatsby starter</a> converted to <a href="https://www.typescriptlang.org/">TypeScript</a>
</p>

<p align="center">
  <a href="LICENSE">
    <img alt="LICENSE" src="https://img.shields.io/github/license/jongwooo/gatsby-starter-typescript?color=blue">
  </a>
  <a href="https://www.codefactor.io/repository/github/jongwooo/gatsby-starter-typescript/overview/master">
    <img alt="CodeFactor" src="https://www.codefactor.io/repository/github/jongwooo/gatsby-starter-typescript/badge/master">
  </a>
  <a href="https://github.com/jongwooo/gatsby-starter-typescript/actions?query=workflow%3A%22Deploy+to+Netlify%22">
    <img alt="Deploy to Netlify Status" src="https://github.com/jongwooo/gatsby-starter-typescript/workflows/Deploy%20to%20Netlify/badge.svg">
  </a>
  <img alt="GitHub stars" src="https://img.shields.io/github/stars/jongwooo/gatsby-starter-typescript?style=social">
</p>

<p align="center">
  <img alt="Gatsby Starter TypeScript" src="https://gatsby-starter-typescript-bucket.s3.ap-northeast-2.amazonaws.com/assets/images/homepage.png"/>
</p>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Install this starter (assuming Gatsby is installed) by running from your CLI.

    ```shell
    # create a new Gatsby site using the gatsby-starter-typescript
    gatsby new gatsby-starter-typescript https://github.com/jongwooo/gatsby-starter-typescript
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd gatsby-starter-typescript/
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

    Open the `gatsby-starter-typescript` directory in your code editor of choice and edit `src/pages/index.tsx`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── .github
    ├── __mocks__
    ├── node_modules
    ├── src
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc.js
    ├── LICENSE
    ├── README.md
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── jest-preprocess.js
    ├── jest.config.js
    ├── loadershim.js
    ├── package-lock.json
    ├── package.json
    └── tsconfig.json

1.  **`/.github`**: This directory contains a set-up of GitHub Actions, a template for the issue / pull-request, and a guide to conducts and contributions.

2.  **`/__mocks__`**: This directory contains [manual mocks](https://jestjs.io/docs/en/manual-mocks) which are used to stub out functionality with mock data. For example, instead of accessing a remote resource like a website or a database, you might want to create a manual mock that allows you to use fake data. This ensures your tests will be fast and not flaky. This description can be found in the [Jest documentation](https://jestjs.io/docs/en/getting-started.html).

3.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

4.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

5.  **`.eslintrc.js`**: This file is the configuration of ESLint. ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

6.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

7.  **`.prettierignore`**: This file tells Prettier which files it should not format for.

8.  **`.prettierrc.js`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

9.  **`LICENSE`**: Gatsby's starter with TypeScript is licensed under the MIT license.

10. **`README.md`**: A text file containing useful reference information about your project.

11. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

12. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

13. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

14. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

15. **`jest-preprocess.js`**: This is a configuration file containing Babel settings for Jest. `jest.config.js` points to this file in order to transform all `.tsx` and `.jsx` files that will be tested.

16. **`jest.config.js`**: This is a configuration file for [Jest](https://jestjs.io/). Jest is a JavaScript testing framework.

17. **`loadershim.js`**: This file contains a function used by Jest when tests are run.

18. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

19. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

20. **`tsconfig.json`**: The presence of this file in a directory indicates that the directory is the root of a TypeScript project. This file specifies the root files and the compiler options required to compile the project.

## ✅ Testing

### Creating New Tests

One example test has been included in this starter. It can be found under `/src/components/__tests__/header.tsx`. This test creates a `Header` component and makes sure it renders correctly. Check out the [Jest documentation](https://jestjs.io/docs/en/getting-started) for how to write more tests.

### Running Tests

To run Jest tests on the project, run `npm test` on the command line.

## ❗ Code of Conduct

I expect everyone participating in the contributing to abide by [Code of Conduct](.github/CODE_OF_CONDUCT.md).

## 🤝 How to Contribute

Check out [Contributing guide](.github/CONTRIBUTING.md) for ideas on contributing and setup steps for getting our repositories up and running on your local machine.

## 🐛 Bug reporting

If you found a bug in this repository, please let me know through the [Issue](https://github.com/jongwooo/gatsby-starter-typescript/issues).

## 📝 License

Licensed under the [MIT License](LICENSE).

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jongwooo/gatsby-starter-typescript)

<!-- AUTO-GENERATED-CONTENT:END -->
