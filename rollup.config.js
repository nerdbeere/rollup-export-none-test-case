import cjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';

export default {
  entry: 'src/index.js',
  format: 'iife',
  plugins: [ cjs(), builtins(), resolve() ],
  dest: 'dist/test.js',
  exports: 'none'
};
