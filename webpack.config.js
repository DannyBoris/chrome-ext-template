const path = require("path");
const ExtensionReloader = require("webpack-extension-reloader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Autoprefixer = require("autoprefixer");
const Tailwind = require("tailwindcss");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".ts", ".tsx", ".js", ".json", ".less"],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js",
  },
  devtool: "cheap-module-source-map",
  devServer: {
    port: 3003,
    hot: true,
  },
  watchOptions: {
    poll: 1000,
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true, // true outputs JSX tags
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.(less|css)$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },

          {
            loader: "postcss-loader",

            options: {
              ident: "postcss",
              plugins: [
                require("tailwindcss"),
                require("autoprefixer"),
              ],
            },
          },
          { loader: "less-loader" },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ExtensionReloader({
      port: 4444,
      reloadPage: true,
      entries: {
        background: "background.js",
      },
    }),
  ],
};
