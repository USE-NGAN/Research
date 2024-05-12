const path = require("path");

/* =======================DEV PLUGINS========================== */
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //for copy index.html to OUTPUT_PATH
/* =======================DEV PLUGINS========================== */

/* =======================CONFIGURATION========================== */
const WebPackSetting = {
  IS_DEBUG_MODE: true, //to use _DEBUG_ in typescript
  VERSION: "0.0.1",
  DISABLE_CACHE_JS: true, //prevent cache js file by browser, by adding a.js?v=hash in script

  OUTPUT_PATH:
    // "/Users/nganphanthanh/Documents/01_AREA/00_REPOSITORY/Research/Deploy/",
    path.join(__dirname, "dist"),
};

const HTML_TITLE = WebPackSetting.IS_DEBUG_MODE
  ? "D426  Web Midi 🤯🤯🤯 [DEBUG MODE]"
  : "D426 Web Midi 🎙️ [PRODUCTION MODE]";

const FILE_PARAM = WebPackSetting.DISABLE_CACHE_JS ? "?v=[contenthash]" : "";
const EXPORT_FILE_NAME_PATTERN = "[name].js" + FILE_PARAM;
const ALLOW_MINIFY_HTML = !WebPackSetting.IS_DEBUG_MODE;
const ALLOW_MINIFY_JS = !WebPackSetting.IS_DEBUG_MODE;
/* =======================CONFIGURATION========================== */

const webpack = require("webpack");

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
  //[index.js] will be created
  entry: {
    index: "./src/index.ts",
    abcdefgh: "./src/pages/abcde.ts",
  },

  // モジュールバンドルを行った結果を出力する場所やファイル名の指定
  output: {
    // path: path.join(__dirname, "dist"), // "__dirname"はファイルが存在するディレクトリ
    path: WebPackSetting.OUTPUT_PATH,
    /*
    [name]はentryで記述した名前（この設定ならindex.js）
    v=0.0.1: to prevent cache js
    */
    filename: "js/" + EXPORT_FILE_NAME_PATTERN,
  },

  // import文でファイル拡張子を書かずに名前解決するための設定
  // 例...「import World from './world'」と記述すると"world.ts"という名前のファイルをモジュールとして探す
  resolve: {
    extensions: [".ts", ".js"], // Reactの.tsxや.jsxの拡張子も扱いたい場合は配列内に追加する
    modules: [path.resolve(__dirname, "src"), "node_modules"], //to use relative path from ROOT. no need to add ../ in import
  },

  //https://webpack.js.org/configuration/dev-server/
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    }, // webpack-dev-serverの公開フォルダ
    open: {
      app:
      {
        name: 'Microsoft Edge' //use edge for run
      }
    },
    client: {
      overlay: true,
    },
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
    minimize: ALLOW_MINIFY_JS,
    minimizer: [new TerserPlugin()],
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
    -> We only want index.js changed, vendors should not be re-created
    */
    moduleIds: "deterministic",
  },

  externals: {
    jquery: "jQuery", // Specify jQuery as an external dependency
  },

  plugins: [
    //for view what is inside a bundle
    // new BundleAnalyzerPlugin({analyzerMode: 'static'}),

    //https://github.com/jantimon/html-webpack-plugin#options
    new HtmlWebpackPlugin({
      //テンプレートに使用するhtmlファイルを指定
      template: "src/index.html", //source tempalate file
      title: HTML_TITLE, //title of page
      filename: "index.html", //destication file name
      chunks: ["index"], //include js from index chunk
      minify: ALLOW_MINIFY_HTML,
      meta: {
        "theme-color": "#4285f4",// Will generate: <meta name="theme-color" content="#4285f4">

      }
    }),
    new HtmlWebpackPlugin({
      //テンプレートに使用するhtmlファイルを指定
      template: "src/pages/abc.html",
      title: HTML_TITLE,
      filename: "pages/abc_newName.html",
      chunks: ["abcdefgh"], //include js from abcdefgh chunk
      minify: ALLOW_MINIFY_HTML,
    }),
    definePlugin,
  ],
};
