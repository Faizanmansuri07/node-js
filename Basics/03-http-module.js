const http = require('http');
const { json } = require('stream/consumers');

// const server = http.createServer((req, res) => {
//   // Set header
//   res.writeHead(200, { 'Content-Type': 'application/json' });

//   // Send response
//   res.end('Hello, bhai! Ye mera first Node.js  hai.');
// });

// server.listen(3000, () => {
//   console.log('Server chal raha hai http://localhost:3000');
// });


const server = http.createServer((req, res) => {
  // Routing logic based on req.url
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Home Page Bhai!');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About Page Bhai!');
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Contact Page Bhai!');
  } else if(req.url === "/users") {
    res.writeHead(200, {"Content-Type" :  "application/json"})
    res.end(JSON.stringify({id : 1, name : "Faizan", age : 21}))
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Page Not Found Bhai!');
  }
});

server.listen(3000, () => {
  console.log('Server chalu hai at http://localhost:3000');
});
