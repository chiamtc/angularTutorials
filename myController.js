/** testing directives 
	partOfJournal in controller but
	part-of-Journal in model
**/
app.directive("keenThings", function(){
	return{
		template:"first directive",
		restrict:"E"
	};
});

app.directive("partOfJournal", function(){
	return{
		//templateUrl to link from another page to current one,
		templateUrl:"anotherTest.html"
	};
});

app.controller("myCtrl",function($scope){
	$scope.hiddent = false;
	$scope.showSomething = function(){
		$scope.hiddent = !$scope.hiddent;
	}
});
/** pop up to show more
app.controller("myCtrl", function($scope){
	$scope.hiddenStuffs = false;
	$scope.myFunc = function(){
		$scope.hiddenStuffs = !$scope.hiddenStuffs;
	}
});

**/



/** ng-options, read it thru
app.controller("myCtrl", function($scope, $http){
	$http({
		method: "get",
		url:"jsonstuffs.php"
	}).then(
		function success(response){
			$scope.nameList = response.data.records;
		},
		function error(response){
			$scope.nameList = "nothing";
		}
	);
	
});
**/

/** using http service with server
	-skeelton $http().then();
	-other services in $http()
	.delete()
	.get()
	.head()
	.jsonp()
	.patch()
	.post()
	.put()
	-response properties 
	.config the object used to generate the request.
	.data a string, or an object, carrying the response from the server.
	.headers a function to use to get header information.
	.status a number defining the HTTP status.
	.statusText a string defining the HTTP status.
	
app.controller("myCtrl", function($scope, $http){
	$http({
		method:"get",
		url:"jsonstuffs.php"
	}).then(
		function success(response){
			$scope.names = response.data.records;
		},
		function error(response){
			$scope.kappa = "Kappa";
		}
	);
});//end controller


/** creating and using service in angularjs like wcf 
app.service("arithmetic", function(){
	this.plus = function(x,y){
		return x+y;
	}
	
	this.minus = function(x,y){
		return x-y;
	}
	
});
app.controller("myCtrl", function($scope, arithmetic){
	$scope.calculate = function(){
		var a = parseInt($scope.txt1);
		var b = parseInt($scope.txt2);
		switch($scope.operation){
			case 'plus':
				$scope.answer = arithmetic.plus(a,b);
			break;
			case 'minus':
				$scope.answer = arithmetic.minus(a,b);
			break;
			default:
				$scope.answer = "something wrong";
			break;
		}
		
	}
});
**/

/** table header order by name or country with click
app.controller("myCtrl",function($scope){
	$scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
        ];
		
	$scope.tableOrder = function(orderType){
		$scope.headerOrder = orderType;
		
	}
});
**/


/** filter from user keyword
app.controller("myCtrl",function($scope){
	$scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
        ];
	
});

**/


/** basic filtering with orderBy
app.controller("myCtrl", function($scope){
	$scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
        ];
	
	
	
});
**/

/** capturing user input and display it live with fullName ()
app.controller("myCtrl", function($scope){
	$scope.fullName = function(){
		)
		return $scope.usrFirstName + ", " + $scope.usrLastName;
		
	}
});

**/


/** Conversion

app.service("conversion",function(){
	this.hexaIt = function(x){
		return x.toString(16);
	}
	
	this.binaIt = function(x){
		return x.toString(2);
	}
	
});

app.controller("myCtrl", function($scope, conversion){
	$scope.convert = function(){
		var a = parseInt($scope.usrInput);
		$scope.answer = conversion.hexaIt(a);
		$scope.answer2 = conversion.binaIt(a);
	}
}); **/

