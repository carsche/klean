import path from "path";
import webpack from "webpack";

const configuration: webpack.Configuration = {
  mode: "production",
  devtool: "cheap-module-source-map",
  entry: "./src/index.ts",
  output: {
      path: path.resolve(__dirname, "../dist"),
      filename: "klean.components.js",
      libraryTarget: "commonjs2"
  },
  resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
      rules: [{
          // Include ts, tsx, js, and jsx files.
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
      }],
  },
  externals: {
    // Don't bundle react or react-dom      
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  }
};

export default configuration;