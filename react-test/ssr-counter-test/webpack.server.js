// webpack.server.js
const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  target: "node",
  mode: "development",
  entry: path.resolve(__dirname, "server/index.tsx"),
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/server"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};