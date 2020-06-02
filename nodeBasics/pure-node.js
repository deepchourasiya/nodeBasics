const http = require("http");

const server = http.createServer((request, response) => {
  let body = [];
  // console.log(request.body , request.url);
  request.on("data", chunk => {
    body.push(chunk);
  });
  request.on("end", () => {
    body = Buffer.concat(body).toString();
    let UserName = "Unknown User"
    if(body){
        UserName = body.split('=')[1];
    }
    // console.log(body);
    response.setHeader("Content-Type", "text/html");
    response.write(
      `<h1>Hi ${UserName} !</h1><form method="POST" sction="/"><input name ="username" type="text"><button type="submit">Send</button></form>`
    );
    response.end();
  });
});

server.listen(3000);
