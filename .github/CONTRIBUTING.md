# How to Contribute

## Issue

Just follow `ISSUE_TEMPLATE`. done!

## Pull Request

### Forked strategy

This repository managed based on forked pull request strategy

```sh
# Fork this repository to yours.
$ git clone [YOUR_REPOSITORY_URL]
$ cd gatsby-starter-typescript

# Install npm packages and start this project.
$ npm install
$ npm start

# (Working...)

$ git commit [...]
$ git push origin [YOUR_REPOSITORY]

# Before enroll pull-request.
$ npm run format
$ npm run lint

# Enroll pull-request!
# in https://github.com/jongwooo/gatsby-starter-typescript
```

## Commit message rules

- The first part of the commit message begins with an infinitive, and the first letter is capitalized. It starts with commands such as `Fix`, `Add` and `Change` instead of past tense such as `Fixed`, `Added` and `Changed`. In addition, It does not exceed 50 characters and does not end with a period (.).

  - `Fixed` -> `Fix`
  - `Added` -> `Add`
  - `Changed` -> `Change`

- Consider starting the commit message with a type label:

  - `feat:` prefix.
    - When create a new feature.
  - `fix:` prefix.
    - When fixing a bug.
  - `docs:` prefix.
    - When adding a document.
  - `style:` prefix.
    - When change the code format.
  - `refactor:` prefix.
    - When refactoring production code.
  - `test:` prefix.
    - When adding or refactoring tests.
  - `chore:` prefix.
    - When update a build test or setting up package manager.

### Thanks!

> I'm waiting for your pull request. :pray:
