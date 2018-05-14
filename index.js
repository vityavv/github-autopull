let http = require("http");

http.createServer((req, res) => {
	let body = "";
	req.on("data", data => body += data);
	req.on("end", () => console.log(body));
	res.end();
}).listen(9000);
