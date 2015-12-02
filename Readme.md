## Welcome to Assignment 25: AngularJS Contact Form


Learning Objectives

Understand how to do form validation using angular models.
Understand how to add smooth transitions into an application.
Understand how to make use of the Angular Style Guide
Details


Deliverables

A link to your repo
A deployed version on `surge.sh


Details

I created a contact form with the following fields: name, email, website and message, as well as a submit button. The form validates all of the form fields and show any and all errors in the form data.

Upon clicking the submit button, valid information is sent to Parse. 

The Comments state displays all of the comments in a nicely styled fashion.

Examples of Errors

- Name cannot be left empty
- Email cannot be left empty
- Email must contain an @
- Website cannot be left empty
- Website must start with http:// or https:// - help
- Message cannot be left empty


## Usage

- Clone this repo
- Run `npm install` to install all necessary dependencies
- Run `gulp start` to start the server and a handful of other tasks


## Assets Installed By Default

- [Normalize CSS](https://necolas.github.io/normalize.css/)

## Assets Setup and ready for use

- [Bourbon](http://bourbon.io/)
- [Neat](http://neat.bourbon.io/)
- [Font Awesome](https://fortawesome.github.io/Font-Awesome/)
- [Foundation 5](http://foundation.zurb.com/)

#### How to use them?

At the top of your `main.scss` file, just import any of the following:

```scss
@import "bourbon";
@import "neat";

@import "foundation";

@import "font-awesome";
```

> Note: You probably don't want to use BOTH Bourbon/Neat & Foundation. Just pick one.

## NPM Tools Used

- [Babel](https://babeljs.io/)
- [Browserify](http://browserify.org/)
- [JavaScript Code Style](http://jscs.info/)
- [SASS](http://sass-lang.com/)
- [Mocha](https://mochajs.org/)
- [Chai](http://chaijs.com/)
