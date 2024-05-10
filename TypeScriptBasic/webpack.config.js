const TerserPlugin = require("terser-webpack-plugin");

// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require("path");

module.exports = {
  // mode: "development",
  // devtool: "inline-source-map",
  devtool: 'source-map', //to view js file in chrome
  // モジュールバンドルを行う起点となるファイルの指定
  // 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
  // 下記はオブジェクトとして指定した例
  //[hello.js] will be created
  entry: {
    hello: "./src/index.ts",
  },
  // モジュールバンドルを行った結果を出力する場所やファイル名の指定
  output: {
    path: path.join(__dirname, "dist"), // "__dirname"はファイルが存在するディレクトリ
    filename: "[name].js", // [name]はentryで記述した名前（この設定ならhello.js）
  },
  // import文でファイル拡張子を書かずに名前解決するための設定
  // 例...「import World from './world'」と記述すると"world.ts"という名前のファイルをモジュールとして探す
  resolve: {
    extensions: [".ts", ".js"], // Reactの.tsxや.jsxの拡張子も扱いたい場合は配列内に追加する
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
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
    minimize: true,
    minimizer: [new TerserPlugin()],
    runtimeChunk: 'single',
    splitChunks: {
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                enforce: true,
                chunks: 'all'
            }
        }
    }
  },
  externals: {
      jquery: 'jQuery', // Specify jQuery as an external dependency
  },

  plugins: [
    //for view what is inside a bundle
    // new BundleAnalyzerPlugin({analyzerMode: 'static'}),

    
  ],
};
