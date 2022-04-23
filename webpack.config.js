const path = require("path");

module.exposts = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  }
};