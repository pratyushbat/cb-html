function loadPosts() {
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



// function loadPosts(title, body) {
//   $.post("/api/posts", { userId: 2, title, body }, (posts) => {
//     if (posts) {
//       console.log("registered posts is ", posts);
//       //   $('#nav-username').text(currentUser.username);
//       // console.log($('#nav-username'))
//     }
//   });
// }