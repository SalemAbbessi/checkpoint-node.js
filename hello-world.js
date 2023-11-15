console.log("HELLO WORLD");


const http = require('http');

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Send the response
  res.end('<h1>Hello Node!!!!</h1>\n');
});


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
const fs = require('fs');

// Create a file named welcome.txt with content "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('welcome.txt created successfully.');
});

