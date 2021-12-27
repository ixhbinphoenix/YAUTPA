# Contribution Guide

This guide will help you get started with contributing to YAUTPA while also explaining some of the guidlines you'll have to follow

## Table of Contents
- [Contribution Guide](#contribution-guide)
  - [Table of Contents](#table-of-contents)
  - [Enviroment setup](#enviroment-setup)
    - [yautpa-desktop](#yautpa-desktop)
  - [Submiting a PR](#submiting-a-pr)
  - [Commit message guidlines](#commit-message-guidlines)

## Enviroment setup

To get started, fork this repository and clone your fork

Before working on any projects in this repo, first run `pnpm i` to install husky and initialize all git hooks.

### yautpa-desktop
1. Run `pnpm i` to install all dependencies
2. For a development electron run, use `pnpm electron:dev`
3. For production builds, use `pnpm app:build`

## Submiting a PR
Before you submit a Pull Request, make sure you:

- search [the PRs](https://github.com/ixhbinphoenix/YAUTPA/pulls) for a PR that already tries to achieve the same
- write your code following the code style and folder structure
- (if applicable) write tests for your changes
- follow the [commit message guidelines](#commit-message-guidlines)
- sign your commits. not required, but appreciated

## Commit message guidlines

Commits should be formatted like this:
```
$type($part): $description [$ci]
```

- $type
  - feat - new Feature
  - fix - Bug fix (include # in description)
  - sec - Security fix (include # in description)
  - refactor - Refactoring of code that does no functional changes
  - docs - Changes to documentation
  - main - Maintenance like CI, tests and scripts
- $project
  - root
  - desktop
- $description - Short description of changes
- $ci *optional* - Write [skip ci] in your commit to disable all CI checks