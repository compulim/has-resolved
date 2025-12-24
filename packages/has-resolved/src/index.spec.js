import 'regenerator-runtime/runtime';
import hasRejectedImpl from './hasRejected';
import hasResolved, { hasRejected } from '.';

test('sanity check', async () => {
  expect(hasRejected).toBe(hasRejectedImpl);
  expect(hasResolved.hasRejected).toBe(hasRejectedImpl);

  await expect(hasResolved(Promise.resolve())).resolves.toBe(true);
  await expect(hasRejected(Promise.reject())).resolves.toBe(true);
});
