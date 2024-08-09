

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, 1000);
  });
  
  const promise2 = Promise.resolve("Promise 2 resolved");
  
  const promise3 = 8;

  const promise4 = Promise.reject('this is failed promise')


// Promise.all polifill 
function myPromiseAll (promiseArr) {
    return new Promise((resolve, reject) => {
        let result = []
        let total = 0
        for (let i = 0; i < promiseArr.length; i++) {
            Promise.resolve(promiseArr[i]).then((res) => {
                result[i] = res
                total++
                if (total === promiseArr.length) {
                    resolve(result)
                }
            }).catch((error) => {
                reject(error)
            })
        }
    })
}

const promiseAll = myPromiseAll([promise1, promise2, promise3, promise4])

promiseAll.then((data) => {
    console.log(data)
}).catch(err => console.log(err))


//  Promise.allSettled polyfill
const myAllSettled = (promises) => {
    return new Promise((resolve) => {
      const result = [];
      let count = 0;
  
      const handleResult = (value, index, status) => {
        result[index] = { status, value };
        count++;
        if (count === promises.length) {
          resolve(result);
        }
      };
  
      for (let i = 0; i < promises.length; i++) {
        Promise.resolve(promises[i]).then(
          (res) => handleResult(res, i, "fulfilled"),
          (err) => handleResult(err, i, "rejected")
        );
      }
    });
  };
  

const promiseAllSetteled = myAllSettled([promise1, promise2, promise3, promise4])

promiseAllSetteled.then((data) => {
    console.log(data)
}).catch(err => console.log(err))
