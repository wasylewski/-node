'use strict'
//1
// console.log(process.argv)


//2
// var sum = 0;
// for(var i = 2; i < process.argv.length; i++) {
//   sum += Number(process.argv[i]);
// }

// console.log(sum);


//3
// var fs = require('fs');
// var buffer = fs.readFileSync(process.argv[2]).toString();

// buffer = buffer.split('\n');
// console.log(buffer.length - 1);


//4
// var fs = require('fs');
// fs.readFile(process.argv[2], 'utf8', function(error, data) {
//   if (error) return;

//   var buffer = data.toString();
//   buffer = buffer.split('\n');

//   console.log(buffer.length - 1);
// })


//5 node program.js /home/jaalinoe/code/node js
// var fs = require('fs');
// var path = require('path');
// fs.readdir(process.argv[2], function (error, list) {
//   if (error) return;

//   var ext = process.argv[3];
//   list = list.filter(function (item) {
//     var fileExtension = path.extname(item).slice(1);
//     if (fileExtension == ext) return item;
//   });
//   list.forEach((item) => console.log(item));

// })

//6
// var myModule = require('./module-program.js');
// myModule(process.argv[2], process.argv[3], function (error, list) {
//   if (error) console.log('prints error');
//   list.forEach((item) => console.log(item));
// });


//7
// var http = require('http');
// http.get(process.argv[2], function (res, utf8) {
//   res.on('data', function (data) { console.log(data.toString()) });
// })

// //or
// var http = require('http')
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)  


//8
// var bl = require('bl');
// var http = require('http');

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     console.log(data.toString().length);
//     console.log(data.toString());    
//   }))
// });


//9 node program.js 'http://www.onet.pl/' 'http://www.onet.pl/' 'http://www.onet.pl/'
// var bl = require('bl');
// var http = require('http');
// var dataSum = '';
// var output = [];
// var count = 0;

// function print(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }


// for (let index = 2, i = 0; i < 3; index++ , i++) {
//   http.get(process.argv[index], function (response) {
//     response.pipe(bl(function (error, data) {
//       output[i] = data.toString();
//       count++;
//       if (count >= 3) {
//         print(output);
//       }
//     }))
//   })
// }


//10
// function listener(socket) {
//   let date1 = new Date();
//   let date = new Date(date1.getTime() + 1000 * 60 * 60 * 2).toISOString().replace('T', ' ').substr(0, 16) + '\n';
//   socket.write(date);
//   socket.end();
//   console.log(date);
// }

// let net = require('net');
// let server = net.createServer(listener);
// server.listen(process.argv[2]);


//11
// function callback(request, response) {
//   let readStream = fs.createReadStream(process.argv[3]);
//   readStream.pipe(response);
// }

// let fs = require('fs');
// let http = require('http');
// let server = http.createServer(callback);
// server.listen(process.argv[2]);


//12
// function callback(request, response) { 
//   if (request.method !== 'POST') return;

//   let all = '';
//   request.on('data', function(data) { 
//     all += data.toString().toUpperCase();
//   })

//   request.on('end', function() {
//     response.end(all);
//   })
// }

// var map = require('through2-map');
// var bl = require('bl');
// let fs = require('fs');
// let http = require('http');
// let server = http.createServer(callback);
// server.listen(process.argv[2]);


//13
function callback(request, response) {
  // if (request !== 'GET') return;

  let contentUrl = url.parse(request.url, true);
  // console.log(contentUrl.query.iso);

  let date = new Date(contentUrl.query.iso);
  // console.log(date);

  // let all = '';
  // request.on('data', function (data) {
  //   all += 
  // })

  response.on('end', function (data) {
    response.end({
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    });

  })


}

let url = require('url');
let http = require('http');
let server = http.createServer(callback);
server.listen(process.argv[2]);




    //  date.getFullYear()  
    //  date.getMonth()     // starts at 0  
    //  date.getDate()      // returns the day of month  
    //  date.getHours()  
    //  date.getMinutes()  
