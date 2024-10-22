app.service('GithubService', [
  '$q',
  '$http',
  'AjaxService',
  function ($q, $http, ajax) {

    // TODO: fix this as it was set to MEAN stack prior and that was a public repo.
    // Now the repo pointed as it private and I would suppose keys need to be added to get this to load.
    var url = 'https://api.github.com/repos/jasonwr/interview_questions_tutorials';
    var gitBranchData;
    // JSON request from the html_url in the gitBranchData request
    var gitBranchSpecificData;
    var gitData;
    var self = this;

    function getGithubUrl() {
      return url;
    }

    function httpGitBranchGET(url) {
      var deferred = $q.defer();
      $http.get(url).success(function (response) {
        // GET the html_url from each branch url:

        for (var i = 0; i < response.length; i++) {
          if (!self.gitBranchData) {
            self.gitBranchData = [];
          }

          self.gitBranchData.push(response[i]);
        }
        deferred.resolve(self.gitBranchData);
      }).error(function (response) {
        console.error('Failed to retrieve data from: ' + url);
        deferred.resolve(response);
      });
      return deferred.promise;
    }
    ;

    return({
      getGitBranchData: function () {
        // Return just the deferred promise so the calling module can use .then
        return httpGitBranchGET(url + '/branches');
      },
      httpGitGET: function (url) {
        return ajax.httpGET(url);
      },
      getGithubUrl: getGithubUrl
    });
  }
]);