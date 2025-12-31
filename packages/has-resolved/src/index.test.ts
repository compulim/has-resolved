import expect from 'expect';
import { test } from 'node:test';
import { hasRejected, hasResolved } from './index.ts';

test('sanity check', async () => {
  await expect(hasResolved(Promise.resolve())).resolves.toBe(true);
  await expect(hasRejected(Promise.reject())).resolves.toBe(true);
});
