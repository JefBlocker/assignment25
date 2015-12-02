let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })

      .state('root.home', {
        url: '/',
        controller: 'HomeController as vm',
        templateUrl: 'templates/home.tpl.html'
      })

      .state('root.addContactUs', {
        url: '/ContactUs/add', 
        controller: 'AddContactUsController as vm',
        templateUrl: 'templates/add-contact-us.tpl.html',
      })

      .state('root.comments', {
        url: '/Comments', 
        controller: 'CommentsController as vm',
        templateUrl: 'templates/comments.tpl.html',
      });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;