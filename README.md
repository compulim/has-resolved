# has-resolved

Checks if a Promise is resolved or rejected asynchronously

[![npm version](https://badge.fury.io/js/has-resolved.svg)](https://badge.fury.io/js/has-resolved)

# How to use

Resolution and rejection checks are asynchronous. You can use `async`/`await` to simplify coding.

## Check for resolution

```js
import { hasResolved } from 'has-resolved';

const promise = Promise.resolve();
const resolved = await hasResolved(promise);

expect(resolved).toBeTruthy();
```

> Please note that `hasResolved` is an asynchronous function and need to be `await`-ed.

## Check for rejection

```js
import { hasRejected } from 'has-resolved';

const promise = Promise.reject();
const rejected = await hasRejected(promise);

expect(rejected).toBeTruthy();
```

# Contributions

Like us? [Star](https://github.com/compulim/has-resolved/stargazers) us.

Want to make it better? [File](https://github.com/compulim/has-resolved/issues) us an issue.

Don't like something you see? [Submit](https://github.com/compulim/has-resolved/pulls) a pull request.
