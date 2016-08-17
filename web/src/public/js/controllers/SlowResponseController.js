/**
 * Created by stephanie.chou on 8/3/16.
 */

(function () {
    var app = angular.module('slowResponseController', []);
 
    app.controller('slowResponseController', function ($scope, $http) {
        $scope.slowRequest = false;

        $scope.slowRequestGet = function(delay) {
            $scope.slowRequest = true;
            return $http.get('/exceptions/slow', {
                params: {
                    delay: delay
                }
            }).finally(function () {
                return $scope.slowRequest = false;
            })
        };
    });
}).call(this);