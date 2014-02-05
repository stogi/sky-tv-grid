/*!
sky-tv-grid - 0.0.1
TV Grid for Sky
Build date: 2014-02-05 
*/
angular.module('sky-tv-grid', ['ngResource'])
    .value('options', {
        endpoints: {
            sampleEndpoint: 'http://sample.endpoint.com'
        }
    });
angular.module('sky-tv-grid').directive('sampleDirective', [function() {
    return {
        restrict: 'E',
        template: '<div>Awesome directive...</div>'
    };
}]);