angular.module('TodoDirective',[]).directive('todoTable', function() {
    return {
        //restrict: 'A', // A -> attribute
        restrict: 'E', // E -> Element
        templateUrl: 'templates/directives/todo-table.html'
    };
});
