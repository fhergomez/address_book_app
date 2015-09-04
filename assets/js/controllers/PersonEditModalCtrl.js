AddressBookApp.controller('PersonEditModalCtrl', ['$scope','$modalInstance','editPerson', function($scope, $modalInstance, editPerson){

  $scope.newPerson={
    first_name:editPerson.first_name,
    last_name:editPerson.last_name,
    note:editPerson.note
  };

  $scope.updatePerson = function(){
    editPerson.first_name = $scope.newPerson.first_name;
    editPerson.last_name = $scope.newPerson.last_name;
    editPerson.note = $scope.newPerson.note;
    editPerson.$save().then(function(){
      $modalInstance.close();
    });
  }

  $scope.cancel = function(){
    $modalInstance.dismiss();
  }

  console.log('person edit modal',editPerson);

}]);