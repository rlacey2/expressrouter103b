 
angularnodeApp.controller('HomeCtrl', ['$scope' , 'nrzLightify', 'cloudService',  
		function($scope, nrzLightify, cloudService   ) {
 
 /*
			nrzLightify({
					type: 'info',
					text: "????????????" 
					 
				}, 3000);			
 */			

 
	$scope.requery = function()
	{
        $scope.responses = [];
		$scope.errors = [];
		
		// using R.data.order to track the call order, notice asynch response may not be in order
		
		// exercise refactor some of this work!
		
		// 4 crud verb calls to birds as proof of concept
        var getOptions = {}; 
		getOptions.route = "/api/v1/birds";
		getOptions.body = null; // not body for get?
		getOptions.order = 1;
		
 		cloudService.get(getOptions).then(function(R) {   
							R.data.order =  getOptions.order;  // no body with get
							$scope.responses.push(R.data);		 
						}, function(error) {
						   $scope.errors.push(error);			 
						});
 
        var postOptions = {}; 
		postOptions.route = "/api/v1/birds";
		postOptions.body = {"a":1 , "b": 2};  
		postOptions.order = 2;
		
 		cloudService.post(postOptions).then(function(R) {   
							R.data.order = postOptions.order;   
							$scope.responses.push(R.data);		 
						}, function(error) {
						   $scope.errors.push(error);			 
						});
						
						
        var putOptions = {}; 
		putOptions.route = "/api/v1/birds";
		putOptions.body = {"a":1 , "b": 2};  
		putOptions.order = 3;
		
 		cloudService.put(putOptions).then(function(R) {   
							R.data.order  = putOptions.order;   
							$scope.responses.push(R.data);		 
						}, function(error) {
						   $scope.errors.push(error);			 
						});						
						
		// https://stackoverflow.com/questions/299628/is-an-entity-body-allowed-for-an-http-delete-request				
						
        var deleteOptions = {}; 
		deleteOptions.route = "/api/v1/birds";
		deleteOptions.body = {"a":1 , "b": 2};  
		deleteOptions.order = 4;
		
 		cloudService.del(deleteOptions).then(function(R) {   
							R.data.order =  deleteOptions.order;   
							$scope.responses.push(R.data);			 
						}, function(error) {
						   $scope.errors.push(error);			 
						});			

        // one call to dogs and cats again as proof of concept
        var getOptions2 = {}; 
		getOptions2.route = "/api/v1/dogs";
		getOptions2.body = null; // not body for get?
		getOptions2.order = 5;
 		cloudService.get(getOptions2).then(function(R) {   
							R.data.order =  getOptions2.order;  // no body with get
							$scope.responses.push(R.data);		 
						}, function(error) {
						   $scope.errors.push(error);			 
						});


        var getOptions3 = {}; 
		getOptions3.route = "/api/v1/cats";
		getOptions3.body = null; // not body for get?
		getOptions3.order = 6;
 		cloudService.get(getOptions3).then(function(R) {   
							R.data.order =  getOptions3.order;  // no body with get
							$scope.responses.push(R.data);		 
						}, function(error) {
						   $scope.errors.push(error);			 
						});
						
	}
	$scope.requery(); // make the intial page call
						
}]); // HomeCtrl
	
 
  