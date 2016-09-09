app.service('AuthenticationService', [
  '$q',
  '$http',
  function ($q, $http) {

    var user = null;

    // place all data to share between controllers in here
    this.data = {username: ""};

    this.setUsername = function(username) {
      this.data.username = username;
    };

    this.getUsername = function() {
      return this.data.username;
    };

    this.isLoggedIn = function() {
      return (user) ? user : false;
    };
    
    this.setUserStatus = function(pUser) {
      user = pUser;
    };

    this.getUserStatus = function() {
      return user;
    };

    this.login = function(username, password) {

      // create a new instance of deferred (promise)
      var deferred = $q.defer();

      // send a post request to the server
      $http.post('/api/login', {
        username: username,
        password: password
      }).then(function (data) {
        if (data.status >= 200) {
          user = true;
          deferred.resolve(data);
        }
      }, function (data) {
        user = false;
        deferred.reject(data);
      });

      // return promise object
      return deferred.promise;
    };

    this.logout = function() {

      // create a new instance of deferred
      var deferred = $q.defer();

      // send a get request to the server
      $http.get('/api/logout').then(function (data) {
        user = false;
        deferred.resolve(data);
      }, function (data) {
        user = false;
        deferred.reject(data);
      });

      // return promise object
      return deferred.promise;

    };

    // register new user in Mongo
    this.register = function(username, firstname, lastname, password) {
      // create a new instance of deferred
      var deferred = $q.defer();

      // send an HTTP POST request to the server (Mongoose)

      $http.post('/api/register', {
        username: username,
        firstname: firstname,
        lastname: lastname,
        password: password
      }).then(function (data) {
        if (data.status >= 200 ) {
          deferred.resolve(data);
        }
      }, function (data) {
        deferred.reject();
      });

      // return promise object
      return deferred.promise;
    };
  }
]);