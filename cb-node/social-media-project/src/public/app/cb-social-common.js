$("#navbar").load("./components/navbar.html", function () {
  console.log("Header navbar Load was performed.");
  loginIfNeeded();
});
$("#content").load("./components/all-posts.html", function () {
  console.log("Content Load was performed.");
  getPosts();
  // loadPosts('Dropdowns','Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.');
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
        console.log("registered user is ", user.username);
        window.localStorage.user = JSON.stringify(user);
        currentUser = user;
        $("#nav-username").text(currentUser.username);
        console.log($("#nav-username"));
      }
    });
  } else {
    console.log("resume session as ", currentUser.username);
    console.log($("#nav-username"));
    $("#nav-username").text(currentUser.username);
  }
  window.currentUser = currentUser;
}

function getPosts() {
  $.get("/api/posts", (posts) => {
    for (let p of posts) {
      $("#post-container").append(
        $(`
           <div class=" col-4  " >
           <div class="card my-2  " >
                <div class="card-body">
                    <h5 class="card-title">${p.title}</h5>
                    <h6 class="card-subtitle">${p.user.username}</h6>
                    <p class="card-text">${p.body.substr(0,100)}
                    <a href="#" > ...read more</a> </p>
                    <a href="#" class="card-link">Comment</a>
                    <a href="#" class="card-link">Like</a>
                </div>
            </div>
            </div>
          `)
      );
    }
  });
}

function loadPosts(title, body) {
  $.post("/api/posts", { userId: 2, title, body }, (posts) => {
    if (posts) {
      console.log("registered posts is ", posts);
      //   $('#nav-username').text(currentUser.username);
      // console.log($('#nav-username'))
    }
  });
}
