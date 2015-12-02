import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import HomeController from './controllers/home.controller';
import ContactUsController from './controllers/contact-us.controller';
import AddContactUsController from './controllers/add-contact-us.controller';

import PARSE from './constants/parse.constant';

import ContactUsService from './services/contact-us.service';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('PARSE', PARSE)
  .controller('HomeController', HomeController)
  .controller('ContactUsController', ContactUsController)
  .controller('AddContactUsController', AddContactUsController)
  .service('ContactUsService', ContactUsService)
;