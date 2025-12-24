const { expect } = require('expect');
const { hasResolved } = require('has-resolved');
const { test } = require('node:test');

test('async resolve', async () => {
  let resolve: (() => void) | undefined;
  const promise = new Promise<void>(r => (resolve = r));

  await expect(hasResolved(promise)).resolves.toBeFalsy();
  resolve?.();
  await expect(hasResolved(promise)).resolves.toBeTruthy();
});

test('sync resolve', () => {
  expect(hasResolved(Promise.resolve(123))).resolves.toBeTruthy();
});

test('async reject', async () => {
  let reject: (() => void) | undefined;
  const promise = new Promise<void>((_, r) => (reject = r));

  await expect(hasResolved(promise)).resolves.toBeFalsy();
  reject?.();
  await expect(hasResolved(promise)).resolves.toBeFalsy();
});

test('sync reject', () => {
  expect(hasResolved(Promise.reject(123))).resolves.toBeFalsy();
});
