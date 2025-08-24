function loadPosts(obj) {
  $.post("/api/posts", obj, (posts) => {
    if (posts) {
      console.log("registered posts is ", posts);
      redirect();
    }
  });
}

// 1st way
// { userId: 2, title, body }
function sendData() {
  const formData = new FormData(form);

  let obj1 = {};

  formData.values().forEach((data, index) => {
    if (index === 0) {
      obj1.title = data;
    } else if (index === 1) {
      obj1.body = data;
    }
  });
  obj1.userId=1;
  console.log(obj1)
  loadPosts(obj1);
}

function redirect(){
     let componentUrl = `/components/all-posts.html`;
  $("#content").load(componentUrl, function () {
    console.log(" loading the data",componentUrl);
  });
}

const form = document.querySelector("#postInfo");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});
