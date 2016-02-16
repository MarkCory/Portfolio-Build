port = angular.module("portfolio", []);

port.controller("PortCtrl", ['$scope', '$http', function($scope, $http){
	$http.get("ui/js/ng/projects.json")
		.then(function(result){
			$scope.projects = result.data;
			console.log(result.data);
		});
}]);

port.filter("sanitize", ['$sce', function($sce){
	return function(htmlCode){
		return $sce.trustAsHtml(htmlCode);
	};
}]);