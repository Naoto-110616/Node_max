const http = require("http");

const server = http.createServer((req, res) => {
	console.log(req.url, req.method, req.header);
	// process.exit();
});

server.listen(3000);
