'use strict';

App.controller('UserController', ['$scope', '$http', function($scope,$http) {

        $scope.source = "";
        $scope.destination = "";
        $scope.firstFlightNo = "";
        $scope.firstDept = "";
        $scope.firstArr = "";
        $scope.secondDept = "";
        $scope.secondArr = "";
        $scope.thirdDept = "";
        $scope.thirdArr = "";
        $scope.secondFlightNo = "";
        $scope.thirdFlightNo = "";
        $scope.secondDuration = "";
        $scope.thirdDuration = "";
        $scope.secondPrice = "";
        $scope.thirdPrice = "";


        var fetchAllUsers = function() {
            return $http.get('http://localhost:8080/offers/itineraries')
                .success(function (data){
                    $scope.source = data.orgin;
                    $scope.destination = data.destination;
                    $scope.firstFlightNo = data.recomendedItinerary.segments[0].flightNumber;
                    $scope.firstDept = data.recomendedItinerary.segments[0].depTime;
                    $scope.firstArr = data.recomendedItinerary.segments[0].arrivalTime;
                    $scope.secondFlightNo = data.otherItineraries[0].segments[0].flightNumber;
                    $scope.secondDept = data.otherItineraries[0].segments[0].depTime;
                    $scope.secondArr = data.otherItineraries[0].segments[0].arrivalTime;
                    $scope.secondDuration = data.otherItineraries[0].segments[0].duration;
                    $scope.secondPrice = data.otherItineraries[0].segments[0].price;

                    /*$scope.thirdFlightNo = data.otherItineraries.segments[1].flightNumber;
                    $scope.thirdDept = data.otherItineraries.segments[1].depTime;
                    $scope.thirdArr = data.otherItineraries.segments[1].arrivalTime;
                     $scope.thirdDuration = data.otherItineraries[0].segments[0].duration;
                     $scope.thirdPrice = data.otherItineraries[0].segments[0].price;
                    */

                    console.log("Test:"+data.recomendedItinerary.segments[0].flightNumber);

                })
                .error(function (error, status){
                    $scope.data.error = { message: error, status: status};
                    console.log($scope.data.error.status);
                });
        };

    fetchAllUsers();

        /*createUser: function(user){
            return $http.post('http://localhost:8080/Spring4MVCAngularJSExample/user/', user)
                .then(
                    function(response){
                        return response.data;
                    },
                    function(errResponse){
                        console.error('Error while creating user');
                        return $q.reject(errResponse);
                    }
                );
        },

        updateUser: function(user, id){
            return $http.put('http://localhost:8080/Spring4MVCAngularJSExample/user/'+id, user)
                .then(
                    function(response){
                        return response.data;
                    },
                    function(errResponse){
                        console.error('Error while updating user');
                        return $q.reject(errResponse);
                    }
                );
        },

        deleteUser: function(id){
            return $http.delete('http://localhost:8080/Spring4MVCAngularJSExample/user/'+id)
                .then(
                    function(response){
                        return response.data;
                    },
                    function(errResponse){
                        console.error('Error while deleting user');
                        return $q.reject(errResponse);
                    }
                );
        }*/


}]);