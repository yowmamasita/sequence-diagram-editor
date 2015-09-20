exports.tasks = {
  requirejs: {
    build: {
      options: {
        baseUrl: "./",
        mainConfigFile: "./app/modules/config.js",
        name: "./app/modules/home/home.module",
        out: "./app/script.js"
      }
    }
  }
};

exports.register = {
  'build': [
    'requirejs:build'
  ]
};
