angular.module('UserService', [])
    .factory('UserAPIService', function($http) {
        
        UserAPIService = {
            callAPI: function(url, data) {
                return $http.post(url, data);
            }
        }
        return UserAPIService;
    });

    /*==============================================================================*
     * We create a module = UserService. This includes:                             *
     * A service called UserAPIService which requires $http (provided by Angular).  *
     * [$http allows us to make calls to the API]                                   *
     * Inside the service we create an object UserAPIService which                  *
     * contains a method registerUser. This method takes                            *
     * two arguments: url and data.                                                 *
     *                                                                              *
     * url: string containing url for the API  see controller.js                    * 
     * data: user object containing username and password in this case.             *
     *                                                                              *
     * =============================================================================*/

 