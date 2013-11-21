var bulettinApp = angular.module('bulletinApp', ['ngResource']);

bulettinApp.controller('PostCtrl', ['$scope', 'Post', function($scope, Post) {
    $scope.heading = 'Bulletin Board';
    $scope.posts = Post.query();

    $scope.create = function(){
        Post.save( $scope.newPost, function(resource) {
            $scope.posts.push(resource);
            $scope.newPost = {}
        }, function(response) {
            console.log('Error ' + response.status);
        } );
    }
}]);

bulettinApp.factory('Post', ['$resource', function($resource) {
    return $resource('/posts');
}]);

bulettinApp.filter('titleize', function() {
    return function(text) {
        if (text == null) return '';
        return String(text).replace(/(?:^|\s)\S/g, function(c){ return c.toUpperCase(); });
    }
});