let _ = require("underscore")._;
let moment = require("moment");

<<<<<<< HEAD
let  UserAdministration = function(args){
=======
let UserAdministration = function(args){
>>>>>>> 4a63aea730bec934a736f2b5c5663e2d8021a912
  args || (args = {});
  _.extend(this,args);
  this.validUntil = args.validUntil ? moment(args.validUntil) : moment().add(10, "days");

  this.expired = function(){
    return this.validUntil.isBefore(moment());
  };

  this.emailIsValid = function(){
    return this.email && this.email.length > 3 && this.email.indexOf("@") > -1;
  };

  this.nameIsValid = function(){
    return this.first && this.last;
  }
  this.validationMessage = function(){
    if(this.isValid()){
      return "Application is valid";
    }else if(!this.emailIsValid()){
      return "Email is invalid";
    }
    }else if(!this.nameIsValid()){
      return "A first and last name is required";
    }else if(this.expired()){
      return "This application is expired";
    }
  }
  this.isValid = function(){
    return this.emailIsValid();
  };

};

module.exports = UserAdministration;
