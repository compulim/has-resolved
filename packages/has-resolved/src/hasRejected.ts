export default function hasRejected(promise: Promise<unknown>): Promise<boolean> {
  const symbol = Symbol();

  return Promise.race([
    promise,
    new Promise((_, reject) => setImmediate(() => reject(symbol)))
  ]).then(() => false, result => result !== symbol);
}
