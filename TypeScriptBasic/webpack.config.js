/* =======================CONFIGURATION========================== */
const WebPackSetting = {
	IS_DEBUG_MODE: true, //to use _DEBUG_ in typescript
	HARD_TO_READ: false, //true: 1 line code, no space; false: normal
  
	/*
	Reposite for source code is private
	  Reposite for release is public
	  Let build source code to public then, we can commit it
	*/
	OUTPUT_PATH:
	  "/Users/nganphanthanh/Documents/01_AREA/00_REPOSITORY/Research/Deploy/",
	  HTML_TITLE: "",
  };
  
  WebPackSetting.HTML_TITLE = WebPackSetting.IS_DEBUG_MODE ? "D426  Web Midi 🤯🤯🤯 [DEBUG MODE]" : "D426 Web Midi 🎙️ [PRODUCTION MODE]";
/* =======================CONFIGURATION========================== */


const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //for copy index.html to OUTPUT_PATH
const webpack = require("webpack");

const path = require("path");
const definePlugin = new webpack.DefinePlugin({
  _DEBUG_: JSON.stringify(WebPackSetting.IS_DEBUG_MODE),
});

module.exports = {
  // mode: "development",
  // devtool: "inline-source-map",
  devtool: "source-map", //to view js file in chrome
  // モジュールバンドルを行う起点となるファイルの指定
  // 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
  // 下記はオブジェクトとして指定した例
  //[hello.js] will be created
  entry: {
    hello: "./src/index.ts",
    abcdefgh: "./src/abcde.ts",
  },
  // モジュールバンドルを行った結果を出力する場所やファイル名の指定
  output: {
    // path: path.join(__dirname, "dist"), // "__dirname"はファイルが存在するディレクトリ
    path: WebPackSetting.OUTPUT_PATH,
    filename: "[name].[contenthash].js", // [name]はentryで記述した名前（この設定ならhello.js）
  },
  // import文でファイル拡張子を書かずに名前解決するための設定
  // 例...「import World from './world'」と記述すると"world.ts"という名前のファイルをモジュールとして探す
  resolve: {
    extensions: [".ts", ".js"], // Reactの.tsxや.jsxの拡張子も扱いたい場合は配列内に追加する
    modules: [path.resolve(__dirname, "src"), "node_modules"], //to use relative path from ROOT. no need to add ../ in import
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    }, // webpack-dev-serverの公開フォルダ
    open: true, // サーバー起動時にブラウザを開く
  },
  // モジュールに適用するルールの設定（ローダーの設定を行う事が多い）
  module: {
    rules: [
      {
        // 拡張子が.tsのファイルに対してTypeScriptコンパイラを適用する
        // Reactで用いる.tsxの拡張子にも適用する場合は test:/\.(ts|tsx)$/,
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: WebPackSetting.HARD_TO_READ,
    // minimizer: [new TerserPlugin()],
    runtimeChunk: "single",

    /* Use  splitChunks to move library code in node_modules to vendors.js
    https://webpack.js.org/guides/caching/#extracting-boilerplate
    https://webpack.js.org/guides/code-splitting/
    */
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          enforce: true,
          chunks: "all",
        },
      },
    },

    /* 
    We are using splitChunks to create vendors.js for external library.
    We also are using [contenthash] in the file name -> when build, vendors.hash.js will change too.
    -> We only want hello.js changed, vendors should not be re-created
    */
    moduleIds: "deterministic",
  },
  externals: {
    jquery: "jQuery", // Specify jQuery as an external dependency
  },

  plugins: [
    //for view what is inside a bundle
    // new BundleAnalyzerPlugin({analyzerMode: 'static'}),
    new HtmlWebpackPlugin({
      //テンプレートに使用するhtmlファイルを指定
      template: "src/index.html",
      title: WebPackSetting.HTML_TITLE,
      filename: 'index.html',
      chunks: ['hello'],
    }),
    new HtmlWebpackPlugin({
      //テンプレートに使用するhtmlファイルを指定
      template: "src/abc.html",
      title: WebPackSetting.HTML_TITLE,
      filename: 'abc22.html',
      chunks: ['abcdefgh'],
    }),
    definePlugin,
  ],
};
