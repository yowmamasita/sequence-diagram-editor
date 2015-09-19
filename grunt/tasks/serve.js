exports.tasks = {
  connect: {
    'serve.js': { }
  },
  watch: {
    'serve.js': {
      files: ['app/**/*.{js,html,css}']
    }
  }
};

exports.register = {
  'serve': [
    'connect:serve.js',
    'watch:serve.js'
  ]
};
