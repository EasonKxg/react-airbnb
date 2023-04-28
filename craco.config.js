const CracoLessPlugin = require("craco-less");
const path = require("path");
const resolve = (pathName) => path.resolve(__dirname, pathName);

module.exports = {
  // 配置less
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
  // 配置别名
  webpack: {
    alias: {
      "@": resolve("scr"),
      assets: resolve("src/assets"),
      components: resolve("src/components"),
      store: resolve("src/store"),
      services: resolve("src/services"),
      pages: resolve("src/pages"),
      utils: resolve("src/utils"),
    },
  },
};
