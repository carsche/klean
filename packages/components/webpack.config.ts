import webpack from "webpack";
import merge from "webpack-merge";
import base from "./build/base";
import development from "./build/development";


const configuration: webpack.Configuration = merge(base, development, {
  mode: 'development'
  // Your `development`-specific configuration...
});

export default configuration;