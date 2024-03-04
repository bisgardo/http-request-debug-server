const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log('URL:', req.url);
  const headers = Object.entries(req.headers);
  if (headers.length) {
    // headers.sort();
    console.log('Headers:');
    headers.forEach(([name, val]) =>
        console.log(`- ${name}: ${val}`)
    )
  } else {
    console.log('Headers: none');
  }

  // Read body.
  let body = '';
  req.on('data', chunk => {
    body += chunk;
  });

  req.on('end', () => {
    if (body) {
      console.log('Body:');
      console.log(body);
    } else {
      console.log('Body: none')
    }

    res.setHeader('Content-Type', 'text/plain');
    res.end('Data received successfully!\n');
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
