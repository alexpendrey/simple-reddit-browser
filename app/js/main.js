
//Globally declaring jquery for bootstrap dependency

$ = jQuery = require('jquery');

var bootstrap = require('bootstrap');


var page = require('page');

require('./routes/home');
require('./routes/about');

page();

console.log('test3');

