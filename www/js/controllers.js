angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
  $scope.url = "http://138.68.57.251:30001"
  $scope.url_webrtc= "http://138.68.57.251:20001/stream/video.mjpeg"
  $scope.sensor1 = false;
  $scope.sensor2 = false;
  $scope.sensor3 = false;
  $scope.toggleSensor = function(pin_gpio) {
      console.log(pin_gpio+"button clicked");
      if(pin_gpio == 17){
        if($scope.sensor1 == false){
          //switch on the sensor
          console.log("switch on")
          $http({
              method: 'GET',
              url: $scope.url+'/?pin=17&status=high'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
              }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
              });
        }else{
          //switch off the sensor
          console.log("switch off")
          $http({
              method: 'GET',
              url: $scope.url+'/?pin=17&status=low'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
              }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
              });
        }
        $scope.sensor1 = !$scope.sensor1
      }else if(pin_gpio == 27){
        if($scope.sensor2 == false){
          //switch on the sensor
          console.log("switch on")
          $http({
              method: 'GET',
              url: $scope.url+'/?pin=27&status=high'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
              }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
              });
        }else{
          //switch off the sensor
          console.log("switch off")
          $http({
              method: 'GET',
              url: $scope.url+'/?pin=27&status=low'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
              }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
              });
        }
        $scope.sensor2 = !$scope.sensor2
      }else if(pin_gpio == 22){
        if($scope.sensor3 == false){
          //switch on the sensor
          console.log("switch on")
          $http({
              method: 'GET',
              url: $scope.url+'/?pin=22&status=high'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
              }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
              });
        }else{
          //switch off the sensor
          console.log("switch off")
          $http({
              method: 'GET',
              url: $scope.url+'/?pin=22&status=low'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
              }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
              });
        }
        $scope.sensor3 = !$scope.sensor3
      }

  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
