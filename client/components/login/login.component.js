const controller = require('./login.controller.js');
const template = require('./login.html');


const component = {
  controller: controller,
  template: template
};

angular
.module('projectThree')
.component('login', component);


