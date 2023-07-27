/* `process.env.UV_THREADPOOL_SIZE = 4` is setting the size of the thread pool used by the Node.js
event loop. The thread pool is responsible for executing asynchronous operations, such as file I/O
and network requests. By default, the thread pool size is 4, but it can be adjusted based on the
requirements of the application. */
process.env.UV_THREADPOOL_SIZE = 4
const http = require('http');
const bcrypt = require('bcrypt');


/* The code is creating an HTTP server using the `http` module in Node.js. The `createServer` method
takes a callback function that is executed whenever a request is made to the server. */
http.createServer((req, res) => {
	    bcrypt.hash('advance nodejs course', 4).then((hash) => {
		            res.writeHead(200, { 'Content-Type': 'text/plain'})
		            res.write(hash)
		            res.end()
		        })
}).listen(3000, () => {
	    console.log('server running at port 3000')
})


// *** to run this module on linux 
// curl localhost:3000
// iwr -Uri "http://localhost:3000"   <-- on powershell

// *** to send parallel request in linux
// ab -n 1000 -c 100 "http://localhost:3000/" | grep "Requests"