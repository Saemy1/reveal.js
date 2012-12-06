var exec = require("child_process").exec;
var sys = require("sys"),
path = require("path"),  
url = require("url"),
filesys = require("fs"); 

function start(response) {
  console.log("Request handler 'start' was called.");

   var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}


function data(response, file) {
  console.log("Request handler 'data' was called.");
  var my_path = 'data/'+file;
  var full_path = path.join(process.cwd(),my_path);  
  console.log(full_path);
   path.exists(full_path,function(exists){  
        if(!exists){  
            response.writeHeader(404, {"Content-Type": "text/plain"});     
            response.write("404 Not Found\n");    
            response.end();  
        }  
        else{  
            filesys.readFile(full_path, "utf8", function(err, file) {    
                 if(err) {    
                 	response.writeHeader()
                     response.writeHeader(500, {"Content-Type": "text/html", "Access-Control-Allow-Origin":"*"});    
                     response.write(err + "\n");    
                     response.end();    
                 
                 }    
                 else{  
                    response.writeHeader(200,{"Content-Type": "text/html", "Access-Control-Allow-Origin":"*"});    
                    response.write(file);    
                    response.end();  
                }  
                       
            });  
        }  
    });  
 
}

function senddata(response) {
  console.log("Request handler 'data' was called.");
  var my_path = 'data/stream';
  var full_path = path.join(process.cwd(),my_path);  
	filesys.watch(full_path, function (event, filename) {
    console.log('event is: ' + event);
    if (filename) {
        console.log('filename provided: ' + filename);
    } else {
        console.log('filename not provided');
    }
});
}

function image(response) {
  console.log("Request handler 'image' was called.");
   var my_path = 'foto.jpg';
    var full_path = path.join(process.cwd(),my_path);  
    path.exists(full_path,function(exists){  
        if(!exists){  
            response.writeHeader(404, {"Content-Type": "text/plain"});   
             
            response.write("404 Not Found\n");    
            response.end();  
        }  
        else{  
            filesys.readFile(full_path, "binary", function(err, file) {    
                 if(err) {    
                 	response.writeHeader()
                     response.writeHeader(500, {"Content-Type": "image/jpeg", "Access-Control-Allow-Origin":"*"});    
                     response.write(err + "\n");    
                     response.end();    
                 
                 }    
                 else{  
                    response.writeHeader(200);    
                    response.write(file, "binary");    
                    response.end();  
                }  
                       
            });  
        }  
    });  
}

exports.start = start;
exports.data = data;
exports.senddata = senddata;
exports.image = image;