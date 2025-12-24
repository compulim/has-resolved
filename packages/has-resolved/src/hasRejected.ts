export default function hasRejected(promise: Promise<unknown>): Promise<boolean> {
  const symbol = Symbol();

  return Promise.race([promise, new Promise((_, reject) => queueMicrotask(() => reject(symbol)))]).then(
    () => false,
    result => result !== symbol
  );
}
