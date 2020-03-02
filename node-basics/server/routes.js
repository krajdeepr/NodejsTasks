const fs = require("fs");
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(
      '<body><form action="/writefile" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/writefile" && method === "POST") {
    const body = [];
    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/readfile");
    return res.end();
  }
  if (url === "/readfile") {
    var data = fs.readFileSync("./message.txt", "utf8");

    console.log(data);
    res.write("<html>");
    res.write("<head><title>The readfile route</title><head>");
    res.write(`<body><form action="/deletefile" method="get"><h1>${data}</h1><button type="submit">Delete</button></body>`);
    res.write("</html>");
   return res.end();
  }
  if (url === "/deletefile?") {
    const path = './message.txt'
    try {
      fs.unlinkSync(path);
    } catch(err) {
      console.error(err);
    }
    res.write('<body><h1>deleted</h1></body>');
    return res.end();
  }
};
module.exports = requestHandler;
