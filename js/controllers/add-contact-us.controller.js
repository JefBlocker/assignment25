
let AddContactUsController = function(ContactUsService) {
  
  let vm = this;

  vm.msgfullname = "Name cannot be left empty";


  vm.msgfullemail = "Email must contain at '@'";

  vm.msgfullwebsite = "Website cannot be left empty and must start with http:// or https://";

  vm.msgfullmessage = "Message cannot be left empty";

  vm.msg = "";
  vm.count = 0;


  vm.addContactUs = addContactUs;

  function addContactUs (ContactUsObj) {
    ContactUsService.addContactUs(ContactUsObj).then( (res) => {
      console.log(res);
    });
  }

};

AddContactUsController.$inject = ['ContactUsService'];

export default AddContactUsController;