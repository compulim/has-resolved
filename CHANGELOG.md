# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Changed
- Bump dependencies, in PR [#2](https://github.com/compulim/has-resolved/pull/2)
   - [@babel/cli@^7.5.5](https://www.npmjs.com/package/@babel/cli)
   - [@babel/core@^7.5.5](https://www.npmjs.com/package/@babel/core)
   - [@babel/plugin-proposal-object-rest-spread@^7.5.5](https://www.npmjs.com/package/@babel/plugin-proposal-object-rest-spread)
   - [@babel/preset-env@^7.5.5](https://www.npmjs.com/package/@babel/preset-env)
   - [babel-jest@^24.8.0](https://www.npmjs.com/package/babel-jest)
   - [babel-plugin-add-module-exports@^1.0.2](https://www.npmjs.com/package/babel-plugin-add-module-exports)
   - [jest@^24.8.0](https://www.npmjs.com/package/jest)
   - [regenerator-runtime@^0.13.2](https://www.npmjs.com/package/regenerator-runtime)
   - [rimraf@^2.6.3](https://www.npmjs.com/package/rimraf)

## [1.1.0] - 2018-10-08
### Added
- Added default exports for CommonJS

### Changed
- Updated to `@babel/core@7.1.2` and `jest@23.6.0`

## [1.0.1] - 2018-03-26
### Fixed
- Fix: named import on `hasRejected` should not be undefined

## [1.0.0] - 2018-03-26
### Added
- First public release
