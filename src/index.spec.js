import hasRejected from './hasRejected';
import hasResolved from '.';

test('sanity check', async () => {
  expect(hasResolved.hasRejected).toBe(hasRejected);

  await expect(hasResolved(Promise.resolve())).resolves.toBe(true);
  await expect(hasRejected(Promise.reject())).resolves.toBe(true);
});
