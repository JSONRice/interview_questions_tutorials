/***
 * OPTIONAL: reference additional vendor packages imported into index.ejs below
 * ui.view could be added here but currently ng-view is being used.
 */

var app = angular.module('web', [
  'ngRoute', 'ngSanitize', 'ngResource', 'ngAnimate', 'ui.calendar', 'ui.bootstrap',
  'ui.select', 'ui.keypress', 'nvd3', 'ngLodash', 'angularSpinner', 'ngclipboard', 'hljs'
]);

// Custom filter to take string and trust as html
app.filter('unsafe', function ($sce) {
  return function (val) {
    return $sce.trustAsHtml(val);
  };
});

// This filter expects input that conforms to a date string:
app.filter('defaultDateTimeFormat', function ($filter) {
  return function (input) {
    if (input === undefined || input === null) {
      return "";
    }


    var date = new Date(input);
    var am_pm = (date.getHours() > 11) ? "pm" : "am";

    var dateStr = $filter('date')(date, 'MMM dd yyyy - hh:mm');

    return dateStr + ' ' + am_pm;
  };
});

// Pretty print JSON
app.filter('prettyJSON', function () {
  function prettyPrintJson(json) {
    return JSON ? JSON.stringify(json, null, '  ') : 'your browser doesnt support JSON so can not pretty print';
  }
  return prettyPrintJson;
});


// calls the services to force pre-load
// this is good for calling services (REST data fetches) during web app bootup
/*
 meanstacktutorials.run([
 'homeService',
 function (homeService) {
 // intentionally left blank
 }
 ]);
 */

// The following ensures that a user is logged in prior to any view being loaded.
// Restricted pages get re-routed back to the login view.
app.run(function ($rootScope, $location, $route, AuthenticationService) {
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    // -- preempt if restricted is undefined. This will be redefined if you have services or
    // controllers that are testing within their own $rootScope. Same principle should apply for the
    // event and current parameters.
    if (!next || !next.access || !next.access.restricted) {
      return;
    }
    if (next.access.restricted && AuthenticationService.isLoggedIn() === false) {
      $location.path('/login');
    }
  });
});


app.config(['$routeProvider', 'hljsServiceProvider',
  function ($routeProvider, hljs) {

    // Page syntax code highlighting:
    hljs.setOptions({
      tabReplace: '   ',
      // Add any languages you need from: https://highlightjs.org/download/
      languages: ['Ruby', 'Java', 'Python', 'C/AL', 'JSON', 
        'JavaScript', 'Perl', 'CSS', 'HTTP', 'HTML', 'XML', 'HTML,XML', 'Bash', 'Markdown', 'Makefile']
    });

    // note: chain on additional route configs with .when(...)
    // The otherwise() (default) page loads from '/' and is the login page
    // All other pages should be restricted access besides the registration,
    // logout, and login pages.
    $routeProvider.when('/', {
      templateUrl: '../templates/login.html',
      controller: 'LoginController',
      access: {restricted: false}
    }).when('/login', {
      templateUrl: '../templates/login.html',
      controller: 'LoginController',
      access: {restricted: false}
    }).when('/logout', {
      controller: 'LogoutController'
    }).when('/register', {
      templateUrl: '../templates/register.html',
      controller: 'RegisterController',
      access: {restricted: false}
    }).when('/treeTest', {
      templateUrl: '../templates/treeTest.html',
      controller: 'TreeController',
      access: {restricted: false}
    })
            // NOTICE: The following route controller configurations are all restricted access
            // If you add a new config then make sure it's access is restricted.
            .when('/home', {
              templateUrl: '../templates/home.html',
              controller: 'HomeController',
              access: {restricted: true}
            })
            .otherwise({
              redirectTo: '/login'
            });
  }]);
