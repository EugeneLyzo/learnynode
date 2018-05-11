/*
* Test https://github.com/workshopper/learnyounode
*
* clear node process:
* $ sudo killall node
*
* */



// 1
// console.log('HELLO WORLD');

// 2
// Write a program that accepts one or more numbers as command-line arguments
// and prints the sum of those numbers to the console (stdout).

// const argv = process.argv;
// const params = argv.slice(2);
// console.log(params.reduce((prev, current) => prev + +current, 0));

// 3  MY FIRST I/O! (Exercise 3 of 13)
// Write a program that uses a single synchronous filesystem operation to
//   read a file and print the number of newlines (\n) it contains to the
//   console (stdout), similar to running cat file | wc -l.
//
//   The full path to the file to read will be provided as the first
//   command-line argument (i.e., process.argv[2]). You do not need to make
//   your own test file.

// const fs = require('fs');
// const argv = process.argv;
// const params = argv.slice(2);
// // console.log(params);
// const buffer = fs.readFileSync(params[0]);
// console.log(buffer.toString().split('\n').length - 1);

// 4 MY FIRST ASYNC I/O! (Exercise 4 of 13)
//  Write a program that uses a single asynchronous filesystem operation to
//   read a file and print the number of newlines it contains to the console
//   (stdout), similar to running cat file | wc -l.
//
//   The full path to the file to read will be provided as the first
//   command-line argument.

// const fs = require('fs');
// const argv = process.argv;
// const params = argv.slice(2);
// // console.log(params);
// fs.readFile(params[0], (err, data) => {
//   if (err) throw err;
//   console.log(data.toString().split('\n').length - 1);
// });


// 5 FILTERED LS (Exercise 5 of 13)
//
//   Create a program that prints a list of files in a given directory,
//   filtered by the extension of the files. You will be provided a directory
//   name as the first argument to your program (e.g. '/path/to/dir/') and a
//   file extension to filter by as the second argument.
//
//   For example, if you get 'txt' as the second argument then you will need to
//   filter the list to only files that end with .txt. Note that the second
//   argument will not come prefixed with a '.'.
//
//   Keep in mind that the first arguments of your program are not the first
//   values of the process.argv array, as the first two values are reserved for
//   system info by Node.
//
//   The list of files should be printed to the console, one file per line. You
//   must use asynchronous I/O.

// ## HINTS
//
//   The fs.readdir() method takes a pathname as its first argument and a
//   callback as its second. The callback signature is:
//
//      function callback (err, list) { /* ... */ }
//
//   where list is an array of filename strings.
//
//   Documentation on the fs module can be found by pointing your browser here:
//   file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html
//
//   You may also find node's path module helpful, particularly the extname
//   method.
//
//   Documentation on the path module can be found by pointing your browser
//   here:
//   file:///usr/local/lib/node_modules/learnyounode/node_apidoc/path.html

// const fs = require('fs');
// const argv = process.argv;
// const params = argv.slice(2);
// // console.log(params);
// fs.readdir(params[0], (err, data) => {
//   if (err) throw err;
//   data.filter(item => item.substr(-3) === `.${params[1]}`).forEach(item => console.log(item));
// });

// 5 ## MAKE IT MODULAR (Exercise 6 of 13)
// This problem is the same as the previous but introduces the concept of
// modules. You will need to create two files to solve this.
//
//   Create a program that prints a list of files in a given directory,
//   filtered by the extension of the files. The first argument is the
// directory name and the second argument is the extension filter. Print the
// list of files (one file per line) to the console. You must use
// asynchronous I/O.
//
//   You must write a module file to do most of the work. The module must
// export a single function that takes three arguments: the directory name,
//   the filename extension string and a callback function, in that order. The
// filename extension argument must be the same as what was passed to your
// program. Don't turn it into a RegExp or prefix with "." or do anything
// except pass it to your module where you can do what you need to make your
// filter work.
//
//   The callback function must be called using the idiomatic node(err, data)
// convention. This convention stipulates that unless there's an error, the
// first argument passed to the callback will be null, and the second will be
// your data. In this exercise, the data will be your filtered list of files,
//   as an Array. If you receive an error, e.g. from your call to
// fs.readdir(), the callback must be called with the error, and only the
// error, as the first argument.
//
//   You must not print directly to the console from your module file, only
// from your original program.
//
//   In the case of an error bubbling up to your original program file, simply
// check for it and print an informative message to the console.
//
//   These four things are the contract that your module must follow.
//
// 1. Export a single function that takes exactly the arguments described.
// 2. Call the callback exactly once with an error or some data as described.
// 3. Don't change anything else, like global variables or stdout.
// 4. Handle all the errors that may occur and pass them to the callback.
//
//   The benefit of having a contract is that your module can be used by anyone
// who expects this contract. So your module could be used by anyone else who
// does learnyounode, or the verifier, and just work.
//
//  ─────────────────────────────────────────────────────────────────────────────
//
//  ## HINTS
//
// Create a new module by creating a new file that just contains your
// directory reading and filtering function. To define a single function
// export, you assign your function to the module.exports object, overwriting
// what is already there:
//
//   module.exports = function (args) { /* ... */ }
//
// Or you can use a named function and assign the name.
//
//   To use your new module in your original program file, use the require()
// call in the same way that you require('fs') to load the fs module. The
// only difference is that for local modules must be prefixed with './'. So,
//   if your file is named mymodule.js then:
//
//   var mymodule = require('./mymodule.js')
//
// The '.js' is optional here and you will often see it omitted.
//
//   You now have the module.exports object in your module assigned to the
// mymodule variable. Since you are exporting a single function, mymodule is
// a function you can call!
//
//   Also keep in mind that it is idiomatic to check for errors and do
//   early-returns within callback functions:
//
//   function bar (callback) {
//     foo(function (err, data) {
//       if (err)
//         return callback(err) // early return
//
//       // ... no error, continue doing cool things with `data`
//
//       // all went well, call callback with `null` for the error argument
//
//       callback(null, data)
//     })
//   }

// const mymodule = require('./mymodule.js')
// const argv = process.argv;
// const params = argv.slice(2);
// mymodule(params[0], params[1], (err, files) => files.forEach(item => console.log(item)));


// 7 ## HTTP CLIENT (Exercise 7 of 13)
//
// Write a program that performs an HTTP GET request to a URL provided to you
// as the first command-line argument. Write the String contents of each
// "data" event from the response to a new line on the console (stdout).
//
//  ─────────────────────────────────────────────────────────────────────────────
//
//  ## HINTS
//
// For this exercise you will need to use the http core module.
//
//   Documentation on the http module can be found by pointing your browser
// here:
//   file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html
//
//     The http.get() method is a shortcut for simple GET requests, use it to
// simplify your solution. The first argument to http.get() can be the URL
// you want to GET; provide a callback as the second argument.
//
//   Unlike other callback functions, this one has the signature:
//
//   function callback (response) { /* ... */ }
//
// Where the response object is a Node Stream object. You can treat Node
// Streams as objects that emit events. The three events that are of most
// interest are: "data", "error" and "end". You listen to an event like so:
//
//   response.on("data", function (data) { /* ... */ })
//
// The "data" event is emitted when a chunk of data is available and can be
// processed. The size of the chunk depends upon the underlying data source.
//
//   The response object / Stream that you get from http.get() also has a
// setEncoding() method. If you call this method with "utf8", the "data"
// events will emit Strings rather than the standard Node Buffer objects
// which you have to explicitly convert to Strings.

// const http = require('http');
// const argv = process.argv;
// const params = argv.slice(2);
// // console.log(params);
// http.get(params[0], function(res) {
//   // console.log(`Got response: ${res.statusCode}`);
//   res.setEncoding('utf8');
//   res.on('data', console.log);
//   res.on('error', console.error);
// }).on('error', function(e) {
//   console.log(`Got error: ${e.message}`);
// });



// 8 ## HTTP COLLECT (Exercise 8 of 13)
//
// Write a program that performs an HTTP GET request to a URL provided to you
// as the first command-line argument. Collect all data from the server (not
// just the first "data" event) and then write two lines to the console
// (stdout).
//
//   The first line you write should just be an integer representing the number
// of characters received from the server. The second line should contain the
// complete String of characters sent by the server.
//
//  ─────────────────────────────────────────────────────────────────────────────
//
//  ## HINTS
//
// There are two approaches you can take to this problem:
//
//   1) Collect data across multiple "data" events and append the results
// together prior to printing the output. Use the "end" event to determine
// when the stream is finished and you can write the output.
//
// 2) Use a third-party package to abstract the difficulties involved in
// collecting an entire stream of data. Two different packages provide a
// useful API for solving this problem (there are likely more!): bl (Buffer
// List) and concat-stream; take your pick!
//
// <https://npmjs.com/bl> <https://npmjs.com/concat-stream>
//
// To install a Node package, use the Node Package Manager npm. Simply type:
//
//   $ npm install bl
//
// And it will download and install the latest version of the package into a
// subdirectory named node_modules. Any package in this subdirectory under
// your main program file can be loaded with the require syntax without being
// prefixed by './':
//
// var bl = require('bl')
//
// Node will first look in the core modules and then in the node_modules
// directory where the package is located.
//
//   If you don't have an Internet connection, simply make a node_modules
// directory and copy the entire directory for the package you want to use
// from inside the learnyounode installation directory:
//
//   file:///usr/local/lib/node_modules/learnyounode/node_modules/bl
//     file:///usr/local/lib/node_modules/learnyounode/node_modules/concat-stream
//
//       Both bl and concat-stream can have a stream piped in to them and they will
// collect the data for you. Once the stream has ended, a callback will be
// fired with the data:
//
//   response.pipe(bl(function (err, data) { /* ... */ }))
// // or
// response.pipe(concatStream(function (data) { /* ... */ }))
//
// Note that you will probably need to data.toString() to convert from a
// Buffer.
//
//   Documentation for both of these modules has been installed along with
//   learnyounode on your system and you can read them by pointing your browser
// here:
//
//   file:///usr/local/lib/node_modules/learnyounode/docs/bl.html
//     file:///usr/local/lib/node_modules/learnyounode/docs/concat-stream.html

// const http = require('http');
// const bl = require('bl');
// const argv = process.argv;
// const params = argv.slice(2);
// // console.log(params);
// http.get(params[0], function(res) {
//   // console.log(`Got response: ${res.statusCode}`);
//   // res.on('data', console.log);
//   res.on('error', console.error);
//   res.pipe(bl((err, data) => {
//     if (err) console.log(err);
//     console.log(data.toString().length);
//     console.log(data.toString());
//   }));
// }).on('error', function(e) {
//   console.log(`Got error: ${e.message}`);
// });


 // 9 ## JUGGLING ASYNC (Exercise 9 of 13)
 //
 //  This problem is the same as the previous problem (HTTP COLLECT) in that
 //  you need to use http.get(). However, this time you will be provided with
 //  three URLs as the first three command-line arguments.
 //
 //  You must collect the complete content provided to you by each of the URLs
 //  and print it to the console (stdout). You don't need to print out the
 //  length, just the data as a String; one line per URL. The catch is that you
 //  must print them out in the same order as the URLs are provided to you as
 //  command-line arguments.
 //
 // ─────────────────────────────────────────────────────────────────────────────
 //
 // ## HINTS
 //
 //  Don't expect these three servers to play nicely! They are not going to
 //  give you complete responses in the order you hope, so you can't naively
 //  just print the output as you get it because they will be out of order.
 //
 //  You will need to queue the results and keep track of how many of the URLs
 //  have returned their entire contents. Only once you have them all, you can
 //  print the data to the console.
 //
 //  Counting callbacks is one of the fundamental ways of managing async in
 //  Node. Rather than doing it yourself, you may find it more convenient to
 //  rely on a third-party library such as [async](https://npmjs.com/async) or
 //  [after](https://npmjs.com/after). But for this exercise, try and do it
 //  without any external helper library.

// const http = require('http');
// const bl = require('bl');
// const argv = process.argv;
// const params = argv.slice(2);
// // console.log(params);
// const results = [];
// let count = 0;
// params.forEach((host, index) => {
//   http.get(host, function(res) {
//     // console.log(`Got response: ${res.statusCode}`);
//     // res.on('data', console.log);
//     res.on('error', console.error);
//     res.pipe(bl((err, data) => {
//       if (err) console.log(err);
//       results[index] = data.toString();
//       count += 1;
//       if (count === 3) {
//         results.forEach(item => console.log(item));
//       }
//     }));
//   }).on('error', function(e) {
//     console.log(`Got error: ${e.message}`);
//   });
// });


// ## TIME SERVER (Exercise 10 of 13)
//
// Write a TCP time server!
//
//   Your server should listen to TCP connections on the port provided by the
// first argument to your program. For each connection you must write the
// current date & 24 hour time in the format:
//
//   "YYYY-MM-DD hh:mm"
//
// followed by a newline character. Month, day, hour and minute must be
// zero-filled to 2 integers. For example:
//
//   "2013-07-06 17:42"
//
// After sending the string, close the connection.
//
//  ─────────────────────────────────────────────────────────────────────────────
//
//  ## HINTS
//
// For this exercise we'll be creating a raw TCP server. There's no HTTP
// involved here so we need to use the net module from Node core which has
// all the basic networking functions.
//
//   The net module has a method named net.createServer() that takes a
// function. The function that you need to pass to net.createServer() is a
// connection listener that is called more than once. Every connection
// received by your server triggers another call to the listener. The
// listener function has the signature:
//
//   function listener(socket) { /* ... */ }
//
// net.createServer() also returns an instance of your server. You must call
// server.listen(portNumber) to start listening on a particular port.
//
//   A typical Node TCP server looks like this:
//
// var net = require('net')
// var server = net.createServer(function (socket) {
//   // socket handling logic
// })
// server.listen(8000)
//
// Remember to use the port number supplied to you as the first command-line
// argument.
//
//   The socket object contains a lot of meta-data regarding the connection,
//   but it is also a Node duplex Stream, in that it can be both read from, and
// written to. For this exercise we only need to write data and then close
// the socket.
//
//   Use socket.write(data) to write data to the socket and socket.end() to
// close the socket. Alternatively, the .end() method also takes a data
// object so you can simplify to just: socket.end(data).
//
//   Documentation on the net module can be found by pointing your browser
// here:
//
//   file:///usr/local/lib/node_modules/learnyounode/node_apidoc/net.html
//
//     To create the date, you'll need to create a custom format from a new
// Date() object. The methods that will be useful are:
//
//   date.getFullYear()
// date.getMonth()     // starts at 0
// date.getDate()      // returns the day of month
// date.getHours()
// date.getMinutes()
//
// Or, if you want to be adventurous, use the strftime package from npm. The
// strftime(fmt, date) function takes date formats just like the unix date
// command. You can read more about strftime at:
//   (https://github.com/samsonjs/strftime)
//

// const argv = process.argv;
// const params = argv.slice(2);
// // console.log(params);
//
// const net = require('net')
// const server = net.createServer(socket => {
//   // console.log('client connected');
//   socket.on('end', function() {
//     // console.log('client disconnected');
//   });
//
//   const date = new Date();
//   const month = date.getMonth() + 1;
//   const day = date.getDate();
//   socket.end(`${date.getFullYear()}-${month.toString().padStart(2, 0)}-${day.toString().padStart(2, 0)} ${date.getHours()}:${date.getMinutes()}\n`);
// });
// server.listen(params[0], () => { //'listening' listener
//   // console.log('server bound');
// });


// ## HTTP FILE SERVER (Exercise 11 of 13)
//
//   Write an HTTP server that serves the same text file for each request it
//   receives.
//
//   Your server should listen on the port provided by the first argument to
//   your program.
//
//   You will be provided with the location of the file to serve as the second
//   command-line argument. You must use the fs.createReadStream() method to
//   stream the file contents to the response.
//
//  ─────────────────────────────────────────────────────────────────────────────
//
//  ## HINTS
//
//   Because we need to create an HTTP server for this exercise rather than a
//   generic TCP server, we should use the http module from Node core. Like the
//   net module, http also has a method named http.createServer() but this one
//   creates a server that can talk HTTP.
//
//   http.createServer() takes a callback that is called once for each
//   connection received by your server. The callback function has the
//   signature:
//
//      function callback (request, response) { /* ... */ }
//
//   Where the two arguments are objects representing the HTTP request and the
//   corresponding response for this request. request is used to fetch
//   properties, such as the header and query-string from the request while
//   response is for sending data to the client, both headers and body.
//
//   Both request and response are also Node streams! Which means that you can
//   use the streaming abstractions to send and receive data if they suit your
//   use-case.
//
//   http.createServer() also returns an instance of your server. You must call
//   server.listen(portNumber) to start listening on a particular port.
//
//   A typical Node HTTP server looks like this:
//
//      var http = require('http')
//      var server = http.createServer(function (req, res) {
//        // request handling logic...
//      })
//      server.listen(8000)
//
//   Documentation on the http module can be found by pointing your browser
//   here:
//   file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html
//
//   The fs core module also has some streaming APIs for files. You will need
//   to use the fs.createReadStream() method to create a stream representing
//   the file you are given as a command-line argument. The method returns a
//   stream object which you can use src.pipe(dst) to pipe the data from the
//   src stream to the dst stream. In this way you can connect a filesystem
//   stream with an HTTP response stream.


const argv = process.argv;
const params = argv.slice(2);
// console.log(params);

const fs = require('fs');
const http = require('http');
const bl = require('bl');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})

  // const file = fs.createReadStream(params[1], {start: 0});
  // file.pipe(bl((err, data) => {
  //   if (err) console.log(err);
  //   res.end(data.toString());
  // }));
  // OR simpler
  fs.createReadStream(params[1]).pipe(res)
});
server.listen(+params[0]);