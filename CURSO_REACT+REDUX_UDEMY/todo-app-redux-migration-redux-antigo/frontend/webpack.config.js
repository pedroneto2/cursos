const webpack = require("webpack");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: __dirname + "/public",
    filename: "./app.js",
  },
  devServer: {
    port: 8080,
    contentBase: "./public",
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      modules: __dirname + "/node_modules",
    },
  },
  module: {
    rules: [
      {
        test: /.js[x]?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
            plugins: ["transform-object-rest-spread"],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
        loader: "file-loader",
      },
    ],
  },
};
