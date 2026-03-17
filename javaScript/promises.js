// const myPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("hello")
//         resolve()
//     },2000)
// })
// myPromise.then(()=>{
//     console.log("hiii")
// })

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("delhi");
//     resolve({ name: "rana", age: 45 });
//   }, 2000);
// }).then((result) => {
//   console.log(result);
// });

// const ePromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "sona", password: "sonaasd234" });
//     } else {
//       reject("ERROR: something is error.");
//     }
//   }, 2000);
// });

// ePromise
//   .then((result) => {
//     console.log(result);
//     return result.username;
//   })
//   .then(function (user) {
//     console.log(user);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// const fPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "alex", password: "abc9876" });
//     } else {
//       reject("ERROR: password is worng.");
//     }
//   }, 2000);
// });

// async function ePromise() {
//   try {
//     const data = await fPromise;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// ePromise()

// fetch("https://randomuser.me/api/")
//   .then((resolve) => {
//     return resolve;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async function datas(resolve) {
//   try {
//     const responce = await fetch("https://randomuser.me/api/");
//     const db = await responce.json();
//     console.log(db);
//   } catch (error) {
//     console.log(error);
//   }
// }
// datas()

fetch("https://randomuser.me/api/")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
