const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
    .then((text) => {
      console.log(`text1 : ${text}`);
      return fetchData();
    })
    .then((text2) => {
      console.log(`text2 : ${text2}`);
      return fetchData();
    })
    .then((text3) => {
      console.log(`text3 : ${text3}`);
    });
}, 2000);

console.log("Hello!");
console.log("Hi!");
