const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "store",
      filename: "remoteEntry.js",
      exposes: {
        "./StoreApp": "./src/bootstrap",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
module.exports = merge(commonConfig, devConfig);
