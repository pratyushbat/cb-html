function download(url) {
  return new Promise((resolve, reject) => {
    if (!url.startsWith("http")) reject(new Error("Url dont start with http"));
    else {
      console.log("start download", url);
      setTimeout(() => {
        let fileName = url.split("/").pop();
        resolve(fileName);
      }, 3000);
    }
  });
}
function resize(fileName) {
  return new Promise((resolve, reject) => {
    if (!fileName.endsWith(".png"))
      reject(new Error("filename  dont end with png"));
    else {
      console.log("start resize", fileName);
      setTimeout(() => {
        // changed x.png to x-resized.png
        let resizedFile = fileName.split(".")[0] + "-resized" + ".png";
        resolve(resizedFile);
      }, 3000);
    }
  });
}
function upload(resizedFile) {
  return new Promise((resolve, reject) => {
    if (!resizedFile.endsWith(".png"))
      reject(new Error("resizedFile  dont end with png"));
    else {
      console.log("start upload", resizedFile);
      setTimeout(() => {
        let uploadUrl = "http://imgur.com/" + resizedFile;
        resolve(uploadUrl);
      }, 3000);
    }
  });
}
// download('https://codeskulptor-assets.commondatastorage.googleapis.com/assets_clock_background.png')
// .then((fileName)=>{
//     resize(fileName).then((resizedFile)=>{
//      console.log('resized file',resizedFile)
//     })
// })
download(
  "https://codeskulptor-assets.commondatastorage.googleapis.com/assets_clock_background.png"
)
  .then(resize)
  .then(upload)
  .then((resizedFile) => {
    // console.log('resized file',resizedFile)

    console.log("file was uploaded to", resizedFile);
  })
  .catch((err) => console.log(err));

Promise.all([
  download("https://cb.lk/banner.png"),
  download("https://cb.lk/promo.png"),
  download("http://cb.lk/logo.png"),
])
  .then((values) => Promise.all(values.map(resize)))
  .then((upvalues) => Promise.all(upvalues.map(upload)))
  .then((data) => console.log("upload", data))
  .catch((err) => console.log(err));
