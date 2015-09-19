define(['jsd'], function (Diagram) {
  'use strict';

  controller.$inject = ['$scope'];

  function controller(scope) {
    var self = this;
    self.source_code = 'A->B: Hello World!';

    var diagram_div = document.querySelectorAll('#diagram')[0];

    scope.$watch(function() { return self.source_code; }, function(val) {
      if (!val) return;

      diagram_div.innerHTML = '';
      Diagram.parse(val).drawSVG('diagram');
      console.log(diagram_div.querySelector('svg'));
    });
  }

  return controller;
});
