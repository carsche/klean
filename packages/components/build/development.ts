import path from "path";
import webpack from "webpack";

const configuration: webpack.Configuration = {
  devtool: "cheap-module-source-map",
  entry: './src/index',
  output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'klean.components.js'
  },
  resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
      rules: [{
          // Include ts, tsx, js, and jsx files.
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
      }],
  }
};

export default configuration;