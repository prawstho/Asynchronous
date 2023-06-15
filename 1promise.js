const myPromise = new Promise((resolve, reject) => {
  try {
    resolve('Yes! resolved the promise!');
  } catch (e) {
    reject(e);
  };
});

const myNextPromise = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve('Yes! myNextPromise resolved!');
    }, 3000);
  } catch (e) {
    reject(e);
  };
});

console.log('call myNextPromise first.');
myNextPromise.then(value => console.log(value)); 
console.log('then call myPromise.'); 
myPromise.then(value => console.log(value));  