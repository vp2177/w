const { config } = require("@swc/core/spack");

module.exports = config({
  entry: [__dirname + "/src/main.jsx"],
  output: {
    path: __dirname + "/.gen/",
  },
  options: {},
  target: "browser",
});
