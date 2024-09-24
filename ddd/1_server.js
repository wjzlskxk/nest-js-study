const http = require("http");
const url = require("url");

const host = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;

  if (path === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>!!!!</h1>`) 
  }

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<h1>hello World</h1>`);
});

server.listen(port, host, () => {
  console.log("server routing on localhost:3000");
});
