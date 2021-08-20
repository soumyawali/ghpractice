// setTimeout(() => {
//   console.log('Two seconds are up');
// },2000);

// const names = ['zen', 'john', 'jerry'];
// const shortnames = names.filter((name) => {
//   return names.length <= 4;
// });

// const geocode = (address,callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0 
//     };
//     //return data;
//     callback(data);
//   },2000);
// };
// geocode('India',(data) => {
//   console.log(data);
// });
// // const data = geocode('India');
// // console.log(data);


const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
};


add(1, 4, (sum) => {
  console.log(sum);// Should print: 5
});