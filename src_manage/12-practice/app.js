const http = require("http");

const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;
	if (url === "/") {
		res.write("<html>");
		res.write(
			'<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
		);
		res.write("<p>Hello from node!</p>");
		res.write("</html>");
		return res.end();
	}
	if (url === "/users") {
		res.write("<html>");
		res.write("<ul><li>User 1</li></ul>");
		res.write("</html>");
		return res.end();
	}
	if (url === "/create-user" && method === "POST") {
		const body = [];
		req.on("data", (chunk) => {
			body.push(chunk);
			console.log(chunk);
		});
		req.on("end", () => {
			const parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody.split("=")[1]);
		});
		res.statusCode = 302;
		res.setHeader("Location", "/");
		res.end();
	}
});

server.listen(3000);
