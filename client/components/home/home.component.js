// We set up and named our component by requiring our controller and template html and assigning them variables
const controller = require('./home.controller.js');
const template = require('./home.html');


const component = {
  controller: controller,
  template: template
};

angular
.module('projectThree')
.component('home', component);
