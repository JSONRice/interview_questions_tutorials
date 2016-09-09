/**
 * User service for /api/users (Mongoose)
 */
app.service('UserService', [
  '$q',
  '$http',
  function ($q, $http) {
    // Fetch users from Mongo user collection:
    this.getUsers = function() {
      var deferred = $q.defer();
      var httpPromise = $http.get('/api/users');

      httpPromise.success(function (users) {
        deferred.resolve(users);
        // Now sort through the users:
        console.debug('users: ' + users);
      }).error(function (error) {
        deferred.reject(error);
      });
      return deferred.promise;
    };

    /**
     * Given a username fetch a single user object (document) from Mongo user collection.
     * @param {string} username the username to based the API query off of.
     * @return {$q:deferred.promise} Contains the promise response object if you want the user data
     * just make sure to look under the nested 'data' object.
     */
    this.getUser = function(username) {
      if (!username || username === "" || username === null) {
        return null;
      }
      var deferred = $q.defer();
      var httpPromise = $http.get('/api/findUser/' + username);

      httpPromise.then(function (user) {
        deferred.resolve(user);
      }, function (error) {
        deferred.reject(error);        
      });
      return deferred.promise;
    };
  }
]);
