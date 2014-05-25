// Generated by CoffeeScript 1.7.1
(function() {
  var module;

  module = angular.module('B.Table.Commands', []);

  module.directive("bTableCommands", function(bDataSvc) {
    return {
      templateUrl: 'b-table-cmds/b-table-cmds.html',
      restrict: 'E',
      link: function(scope) {
        bDataSvc.fetchAllP.then(function(data) {
          scope.commands = data.data.commands;
        });
      }
    };
  });

}).call(this);

//# sourceMappingURL=b-table-cmds.map