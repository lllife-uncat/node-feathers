//@http://stackoverflow.com/questions/6084360/node-js-as-a-simple-web-serve   

console.log('Start connect at localhost:8080');

var connect = require('connect');
connect.createServer( connect.static(__dirname)).listen(8888);