var GruntByModule = require('grunt-by-module');


module.exports = function(grunt) {
  GruntByModule.config(grunt, {
    pluginsPath: 'grunt/plugins',
    tasksPath: 'grunt/tasks'
  });
};
