let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
      .state('root.home', {
        url: '/',
        controller: 'HomeController as vm'
        templateUrl: 'templates/home.tpl.html'
      })
      .state('root.contactus', {
        url: '/contactus',
        controller: 'ContactUsController as vm',
        templateUrl: 'templates/contact-us.tpl.html'
      })
      .state('root.addcontactus', {
        url: '/addcontactus', 
        controller: 'AddContactUsController as vm',
        templateUrl: 'templates/add-contact-us.tpl.html',
      });


};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;