import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const env = `var process = {
  env: {
    NODE_ENV:''
  }
}`

export default {
  input: './lib/app.js',
  output: {
    file: 'build/bundle.js',
    format: 'iife',
    name: 'test',
    banner: env
  },
  watch: {
    include: 'lib/**'
  },
  plugins: [resolve(), commonjs()]
}