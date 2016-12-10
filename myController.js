app.directive("keen", function(){
	return{
		template:" is hand ",
		restrict:"E"
		
	};
});



app.directive("myDirective", function(){
	return{
		template:"another directive?",
		restrict:"E"
	};
});


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

