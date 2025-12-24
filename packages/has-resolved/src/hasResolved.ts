export default function hasResolved(promise: Promise<unknown>): Promise<boolean> {
  const symbol = Symbol();

  return Promise.race([
    promise,
    new Promise(resolve => setImmediate(() => resolve(symbol)))
  ]).then(result => result !== symbol, () => false);
}
