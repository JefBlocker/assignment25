let ContactUsService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/contactus';

  this.getAllContacts = getAllContacts;
  this.addContactUs = addContactUs;

  function ContactUs (ContactUsObj) {
    this.name = ContactUsObj.name;
    this.email = ContactUsObj.email;
    this.website = ContactUsObj.website;
    this.message = ContactUsObj.message;
  }

  function getAllContacts () {
    return $http.get(url, PARSE.CONFIG);
  }

  function getComments (id) {
    return $http.get(url + '/' + id, PARSE.CONFIG);

  function addContactUs (ContactUsObj) {
    let newContactUs = new ContactUs(ContactUsObj);
    return $http.post(url, newContactUs, PARSE.CONFIG);
  }

};

ContactUsService.$inject = ['$http', 'PARSE'];

export default ContactUsService;


