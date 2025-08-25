console.log("helll");

let socket = io();
console.log(socket);
let boomBtn = document.getElementById("boom");

let inpMsg = document.getElementById("inpMsg");
let btnSend = document.getElementById("btnSend");
let ulMsgList = document.getElementById("ulMsgList");



btnSend.onclick = function () {
  socket.emit("msg_send",{
    msg:inpMsg.value
  });
  inpMsg.value
};

// boomBtn.onclick = function () {
//   socket.emit("boom");
// };

// socket.on("whizz", () => {
//   let div = document.createElement("div");
//   div.innerText = "whizz";
//   document.body.appendChild(div);
// });


socket.on("msg_rcvd", (data) => {
  let div = document.createElement("div");
  div.innerText = data.msg;
  document.body.appendChild(div);
});
