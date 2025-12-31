import expect from 'expect';
import { test } from 'node:test';
import hasRejected from './hasRejected.ts';

test('async resolve', async () => {
  let resolve: (() => void) | undefined;
  const promise = new Promise<void>(r => (resolve = r));

  await expect(hasRejected(promise)).resolves.toBeFalsy();
  resolve?.();
  await expect(hasRejected(promise)).resolves.toBeFalsy();
});

test('sync resolve', () => {
  expect(hasRejected(Promise.resolve(123))).resolves.toBeFalsy();
});

test('async reject', async () => {
  let reject: (() => void) | undefined;
  const promise = new Promise<void>((_, r) => (reject = r));

  await expect(hasRejected(promise)).resolves.toBeFalsy();
  reject?.();
  await expect(hasRejected(promise)).resolves.toBeTruthy();
});

test('sync reject', () => {
  expect(hasRejected(Promise.reject(123))).resolves.toBeTruthy();
});
