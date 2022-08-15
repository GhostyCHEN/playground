const path = require("path")

const resolve = function (dir) {
  return path.join(__dirname, dir)
}


module.exports = { 

  configureWebpack: {
    // plugins: [
    //   new webpack.DllReferencePlugin({
    //     context: process.cwd(),
    //     manifest: require("./public/vendor/vendor-manifest.json")
    //   })
    // ],
    resolve: {
      // 配置解析别名
      extensions: [".js", ".json", ".vue"],
      alias: {
        "@": resolve("src"),
        "@c": resolve("src/components"),
        "@a": resolve("src/api"),
        "@u": resolve("src/utils"),
        "@v": resolve("src/views")
      }
    }
  },

}