AddressBookApp.controller('PersonShowCtrl', ['$scope','Person','$routeParams', function ($scope, Person, $routeParams) {

  $scope.person={};
  $scope.contact={}

  Person.get({id: $routeParams.id}).then(function(person){
    console.log(person);
    $scope.person = person;
  });

  // $scope.addContact = function(){
  //   var newContact = newPersonContact($scope.contact)
  //   newContact.$save
  // }


}]);