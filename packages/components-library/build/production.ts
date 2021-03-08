import path from "path";
import webpack from "webpack";

const configuration: webpack.Configuration = {
  mode: "production",
  devtool: "source-map",
  entry: "./src/index.tsx",
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
    // Don't bundle react      
    react: "react"
  }
};

export default configuration;