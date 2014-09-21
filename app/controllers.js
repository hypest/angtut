angular.module("myApp.controllers", []).controller("songCtrl", function($scope) {
    $scope.songs = [];
                    
    $scope.newSong = { };

    $scope.addSong = function(artist, title) {
        $scope.songs.push({
            artist: artist,
            title: title
        });
        $scope.newSong.artist = "";
        $scope.newSong.title = "";
    }

    $scope.isEmpty = function(str) {
        return _.isBlank(str);
    }
})