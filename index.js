let http = require("http");
let {spawn} = require("child_process");

http.createServer((req, res) => {
	res.end();
	spawn("git", ["pull", "origin", "master"]);
}).listen(80);
