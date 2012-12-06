function route(handle, pathname, response) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
  }
}

function routeHtml(handle, file, response) {
  console.log("About to route a request for " + file);
  if (typeof handle["/data"] === 'function') {
    handle["/data"](response, file);
  } else {
    console.log("No request handler found for " + file);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;
exports.routeHtml = routeHtml;