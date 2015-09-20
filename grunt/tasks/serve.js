exports.tasks = {
  connect: {
    serve: { }
  },
  watch: {
    serve: {
      files: ['app/**/*.{js,html,css}']
    }
  }
};

exports.register = {
  serve: [
    'connect:serve',
    'watch:serve'
  ]
};
