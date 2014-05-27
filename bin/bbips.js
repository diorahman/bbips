#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');
var bbips = require('../');

program
  .version('0.0.1')
  .parse(process.argv);

bbips(function (err, data){
  if (err) {
    console.log ('something is wrong! sorry...');
  } else {
    console.log(data);
    console.log('<3');
  }
  process.exit();
});
