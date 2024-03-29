const path = require("path");
const webpack = require("webpack");
const editor = require("babylonjs-editor-webpack-progress");

module.exports = (_, argv) => {
  const entryPath = path.join(__dirname, "src/index.ts");
  const package = require("./package.json");

  let plugins = [
    new webpack.BannerPlugin({
      banner: `${package.name} ${package.version} ${new Date().toString()}`,
    }),
    new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
  ];
  if (process.env.BUILD_IN === "editor") {
    plugins.push(editor.createProgressPlugin(new webpack.ProgressPlugin()));
  }

  return {
    // we output both a minified version & a non minified version on production build
    entry: { bundle: entryPath },
    output: {
      filename: `bundle.js`,
      path: path.join(__dirname, "dist"),
      library: "game",
      libraryTarget: "umd",
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          // we use babel-loader for polyfill only on production build
          loader: ["ts-loader"],
          exclude: [
            path.join(__dirname, "node_modules"),
            path.join(__dirname, "dist"),
            path.join(__dirname, "projects"),
            path.join(__dirname, "scenes"),
          ],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    plugins: plugins,
    optimization: {
      minimize: false,
      usedExports: true,
    },
    devtool: "source-map",
  };
};
