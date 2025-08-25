
let socket = io();
let username;
$('#loginBox').show();
$('#chatBox').hide();


$('#btnStart').click(() => {
  socket.emit("login", {
    username: $('#inpUserName').val(),
    password: $('#inpPassword').val()
  });
});

  socket.on("logged_in", (username) => {
    console.log("logged_in received from socket id = ", socket.id);
    $('#loginBox').hide();
    $('#chatBox').show();
    // username = data.username;
    var parent = $('#parent');
    var child = $(`<div><p style='color:violet'>${username}</p></div>`);
    parent.append(child);
  });
  socket.on("login_failed", () => {
   window.alert('username or password is wrong')
  });

  $('#btnSendMsg').click(() => {
  socket.emit("msg_send", {
    to:$('#inpToUser').val(),
    msg: $('#inpNewMsg').val()
  });
});

  socket.on("msg_rcvd", (data) => {
   $('#ulMsgs').append($('<li>').text( `[${data.from}] : ${data.msg}`))
  
  });