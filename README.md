# Debug Server for HTTP requests

Minimal server in Node.js for debugging HTTP requests.

The server listens on port 3000 (edit source file to change) and logs requests to stdout.
The URL, headers, and body are recorded.
Once the request body has been loaded (and logged) a response simply saying "Data received successfully!" is returned.
