/**
 * @author Balachandar Sureshkumar
 * @email [balachandar.sureshkumar<at>gmail.com]
 * @create date 2021-06-11 00:28:52
 * @modify date 2021-06-12 19:48:21
 * @desc Webpack Configuration
 */

const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/assets/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader",
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    watchContentBase: true,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "*.html",
          context: path.resolve(__dirname, "src", "html"),
          force: true,
        },
        {
          from: "*",
          context: path.resolve(__dirname, "src", "assets", "images"),
          to: "images",
          force: true,
        },
      ],
    }),
  ],
};
