const express = require("express");
const app = express();
const server = require("http").createServer(app);

var io = require("socket.io")(server);


io.on("connection", function(client) {

    console.log("client connected");

    client.on("messages", function(data) {

        console.log(data);
        client.broadcast.emit("messages", data);

    });



});

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/index.html");

});

server.listen(8080);