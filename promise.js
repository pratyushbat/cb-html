console.log("promise");

function fakeDownload(done) {
  setTimeout(function () {
    let downloadedData = "some data download of the web";
    done(downloadedData);
  }, 1000);
}

fakeDownload(function (data) {
  console.log("we downlaod a file which had the data ---->");
  console.log(data);
});

function fakeDownloadPromise(correct) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let downloadedData = "some data from net promise";
      correct
        ? resolve(downloadedData)
        : reject(new Error("could not download file"));
    }, 1000);
  });
}

let downloadeddaaea = fakeDownloadPromise(true);
downloadeddaaea.catch(function (err) {
  console.log(err);
});
setTimeout(function () {
  downloadeddaaea.then(function (data) {
    console.log(" data we downloaded promise is---->");
    console.log(data);
  });
}, 3000);
