const http = require("http");

const socketio = require("socket.io");

const express = require("express");
const app = express();
const server = http.createServer(app);
const io = socketio(server);
io.on("connection", (socket) => {
    console.log("connected with socket id = ", socket.id);

    socket.on("msg_send", (data) => {
        console.log("msg_send received from socket id = ", socket.id, "and data is = " + data.msg);
        // socket.emit("msg_rcvd", data); //send to themselve only
        socket.broadcast.emit("msg_rcvd", data); // go to every socket other than current
        // io.emit("msg_rcvd", data); //send to everybody
    });

    //   setTimeout(() => {
    //     socket.emit("whizz");
    //   }, 2000);

        //   socket.on("boom", () => {
    //     console.log("boom received from socket id = ", socket.id);
    //   });
});


app.use("/", express.static(__dirname + "/public"));

server.listen(3444, () => console.log("server started"));
