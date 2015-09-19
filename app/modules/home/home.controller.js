define([], function () {
  'use strict';

  controller.$inject = [];

  function controller() {
    var self = this;
    self.source_code = 'A->B: Hello World!';
  }

  return controller;
});
