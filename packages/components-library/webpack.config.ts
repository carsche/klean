import webpack from "webpack";
import merge from "webpack-merge";
import base from "./build/base";
import development from "./build/development";
import production from "./build/production";


const configuration: webpack.Configuration = merge(base, production, {
  mode: 'production'
  // Your `development`-specific configuration...
});

export default configuration;