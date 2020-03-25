const http = require("http");

// const rqListner = (req,res) => {}
// http.createServer(rqListner);

/** or we can use directly the arrow function inside the createServer */

/** createServer will return a server */

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //   console.log(req);
  //   process.exit(); /**it will hard exit ther server after execution.*/
  /** setting the response */

  res.setHeader('Content-Type','text/html');
  res.write("<html>");
  res.write("<head><title>My App</title></head>");
  res.write("<body><h1>Hey There ..!</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);
