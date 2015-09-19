define(['jsd'], function (Diagram) {
  'use strict';

  controller.$inject = ['$scope'];

  function controller(scope) {
    var self = this;
    self.source_code = 'A->B: Hello World!';

    scope.$watch(function() { return self.source_code; }, function(val) {
      if (!val) return;

      Diagram.parse(val).drawSVG('diagram');
      var diagram_div = document.querySelectorAll('#diagram')[0];
      var svg = diagram_div.querySelector('svg');
    });
  }

  return controller;
});
