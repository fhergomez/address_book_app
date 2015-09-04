AddressBookApp.controller('PersonNewCtrl', ['$scope','Person','$location', function ($scope, Person, $location) {

  $scope.newPerson = {
    first_name: '',
    last_name: '',
    note: ''
  };

  console.log('new person controller 123');

  $scope.createPerson = function(){
    //validate stuff here is an option
    var newPerson = new Person($scope.newPerson);
    // newPerson.first_name=$scope.newPerson.last_name;
    newPerson.$save().then(function(personResult){
      console.log('person',personResult);
      $location.path('/');
    }).catch(function(err){
      alert("it didn't work");
      console.log('err',err);
    });
  }

}]);