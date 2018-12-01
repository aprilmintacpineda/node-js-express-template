<!-- @format -->

# What this is

This repository serves as a template when using [NodeJS](https://nodejs.org/en/) and [ExpressJS](https://expressjs.com/). Development and production ready.

# Getting started

1. Clone the repository.
2. `npm i`
3. `npm run compile` -- to start babel compiler.
4. `npm run serve` -- to start serve the server using nodemon.
5. `npm run build` -- to build for production. Your files would be available at `build/`

# Dot Env

## Environment variables

Environment variables defined in `.env` file would be available as the `env` global object. You should prefix them with `APP_ENV_`, e.g., `APP_ENV_TEST_VAR="some value"`, which would be available via `env.testVar`. All env variables will be converted to `camelCase`, additionally, the prefix `APP_ENV_` will not be included in the key name.

`publicPath`, which came from `PUBLIC_PATH`, and `nodeEnv`, which came from `NODE_ENV`, are available by default.

#### NOTE

All values defined in `env` global object are `String`s.

# Code formatting

For code formatting the template is using [eslint](https://github.com/eslint/eslint) and [prettier](https://github.com/prettier/prettier).

#### NPM scripts

- To run eslint `npm run eslint`.
- To run prettier `npm run prettier`.
- To run both in the proper order `npm run lint`.
