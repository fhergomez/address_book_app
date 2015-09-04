AddressBookApp.controller('HomeCtrl', ['$scope','Person','$modal', function($scope, Person, $modal){

  $scope.persons = [];
  $scope.orderField = 'last_name';

  Person.query().then(function(persons){
    $scope.persons = persons;
  })

  $scope.deletePerson = function(person) {
    person.$delete();
  }

  $scope.editPerson = function(person){
    $modal.open({
      templateUrl: '/views/person/editModal.html',
      controller: 'PersonEditModalCtrl',
      resolve:{
        editPerson: function(){
          return person;
        }
      }
    });
  }

}]);