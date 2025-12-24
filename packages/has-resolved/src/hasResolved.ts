export default function hasResolved(promise: Promise<unknown>): Promise<boolean> {
  const symbol = Symbol();

  return Promise.race([promise, new Promise(resolve => queueMicrotask(() => resolve(symbol)))]).then(
    result => result !== symbol,
    () => false
  );
}
