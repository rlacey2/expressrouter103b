 4
 angularnodeApp.service('cloudService', ['$http', '$q', function ($http, $q) {	
 
    function get(options)
	{
			var deferred = $q.defer();
		
			$http.get(options.route).then(function(response) {
			  
					deferred.resolve(response );
					}, function(error) {
			  
						deferred.reject(error);
				});
			return deferred.promise;		
		
	} 	 // get	
   
	
    function post(options)
	{
			var deferred = $q.defer();
		
			$http.post(options.route, options.body).then(function(response) {
			  
					deferred.resolve(response );
					}, function(error) {
			  
						deferred.reject(error);
				});
			return deferred.promise;		
		
	} 	 // post		
	
    function put(options)
	{
			var deferred = $q.defer();
		
			$http.put(options.route, options.body).then(function(response) {
			  
					deferred.resolve(response );
					}, function(error) {
			  
						deferred.reject(error);
				});
			return deferred.promise;		
		
	} 	 // put		
	
    function del(options)
	{
			var deferred = $q.defer();
		
			$http.delete(options.route, options.body).then(function(response) {
			  
					deferred.resolve(response );
					}, function(error) {
			  
						deferred.reject(error);
				});
			return deferred.promise;		
		
	} 	 // delete		
	
	
	return {
		get 	: get,
		post 	: post,
		put  	: put,
		del  	: del 
	}
}]);