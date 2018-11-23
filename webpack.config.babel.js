import { join } from 'path';

const context = join(__dirname, 'src');

export default {
  context,
  entry: './index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'wx-miniapp-promisify'
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js$/, loaders: ['babel-loader'], include: context },
      { test: /\.json$/, loaders: ['json-loader'], include: context }
    ]
  }
};
