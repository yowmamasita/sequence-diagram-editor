module.exports = {
  task: 'grunt-contrib-connect',
  options: {
    port: 9000,
    middleware: function (connect) {
      return [
        connect().use(
          '/bower_components',
          connect.static('./bower_components')
        ),
        connect().use(
          '/node_modules',
          connect.static('./node_modules')
        ),
        connect.static('./app')
      ];
    }
  }
};
