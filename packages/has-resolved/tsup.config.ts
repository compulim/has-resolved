import { defineConfig } from 'tsup';

export default defineConfig([
  {
    dts: true,
    entry: {
      'has-resolved': './src/index.ts'
    },
    format: ['cjs', 'esm'],
    sourcemap: true,
    target: 'esnext'
  }
]);
