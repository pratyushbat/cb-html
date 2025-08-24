$("#navbar").load("./components/navbar.html", function () {
  console.log("Header navbar Load was performed.");
  loginIfNeeded();
});
$("#content").load("./components/all-posts.html", function () {
  console.log("all post containts its own script and there it is loading the data");
});
$("#footer").load("./components/footer.html", function () {
  console.log("Footer Load was performed.");
});

function loginIfNeeded() {
  let user = window.localStorage.user;
  window.currentUser = user ? JSON.parse(user) : null;
  if (!currentUser) {
    $.post("/api/users", {}, (user) => {
      if (user) {
        // console.log("registered user is ", user.username);
        window.localStorage.user = JSON.stringify(user);
        currentUser = user;
        $("#nav-username").text(currentUser.username);
      }
    });
  } else {
    console.log("resume session as ", currentUser.username);
    $("#nav-username").text(currentUser.username);
  }
  window.currentUser = currentUser;
}




