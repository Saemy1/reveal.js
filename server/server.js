var http = require("http");
var url = require("url");

function start(route,routeHtml, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("start");
    var keys = pathname.split('/');
    var folder = "";
    var html = "";
    if(keys.length === 3) {
    	folder = keys[1];
    	file = keys[2];
      	console.log(keys.length);
      	console.log(folder);
      	console.log(file);
      	
      	console.log("Request for " + pathname + " received.");
    	route(handle, file, response);
    } else if(keys.length === 2) {
    	console.log(keys.length);
    	file = keys[1];
      	console.log(folder);
      	console.log(file);
    	console.log(keys.length);
    	
    	console.log("Request for " + pathname + " received.");
   		route(handle, pathname, response);
    } else {
    	console.log(keys.length);
      	console.log(folder);
    	console.log(keys.length);
    	
		console.log("Request for " + pathname + " received.");
    	route(handle, pathname, response);
    }
 
  }

  http.createServer(onRequest).listen(1337);
  console.log("Server has started.");
}

exports.start = start;