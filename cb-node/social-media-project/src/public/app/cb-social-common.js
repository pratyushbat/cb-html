$("#navbar").load("./components/navbar.html", function () {
  console.log("Header navbar Load was performed.");
   loginIfNeeded();
});
$("#content").load("./components/content.html", function () {
  console.log("Content Load was performed.");
});
$("#footer").load("./components/footer.html", function () {
  console.log("Footer Load was performed.");
 
});

function loginIfNeeded() {
  let user = window.localStorage.user;
  let currentUser = user ? JSON.parse(user) : null;
  if (!currentUser) {
    $.post("/api/users", {}, (user) => {
      if (user) {
        console.log("registered user is ", user.username);
        window.localStorage.user = JSON.stringify(user);
        currentUser=user;
        $('#nav-username').text(currentUser.username);
      console.log($('#nav-username'))
      }
    });
  } else {
    console.log("resume session as ", currentUser.username);
          console.log($('#nav-username'))
     $('#nav-username').text(currentUser.username);
  }
    window.currentUser=currentUser;
}
