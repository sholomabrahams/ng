var weinerApp = angular.module('weinerApp', [
	'ui.router',
	'weinerControllers',
	'animations',
	'firebase',
	'ngSanitize'
]);

weinerApp.factory("Auth", ["$firebaseAuth", function($firebaseAuth) {
		var ref = new Firebase("https://weinerfever.firebaseio.com");
		return $firebaseAuth(ref);
	}
]);