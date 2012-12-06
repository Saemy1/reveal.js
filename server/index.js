var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/data"] = requestHandlers.data;
handle["/senddata"] = requestHandlers.senddata;
handle["/image"] = requestHandlers.image;

server.start(router.route,router.routeHtml, handle);