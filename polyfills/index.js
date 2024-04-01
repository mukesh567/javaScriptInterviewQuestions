//1. forEach
// let arr = [1, 2, 3, 4, 5];

// Array.prototype.myForEach = function (cb) {
//   //this means arr
//   console.log(this);

//   for (let i = 0; i < this.length; i++) {
//     cb(this[i], i, this);
//   }
// };

// arr.myForEach((el) => console.log(el));

//******************************************************************************************************* */
//2. map
// let arr = [1, 2, 3, 4, 5];

// Array.prototype.myMap = function (cb) {
//   let newArr = [];

//   for (let i = 0; i < this.length; i++) {
//     newArr.push(cb(this[i], i, this));
//   }

//   return newArr;
// };

// let newArr = arr.myMap((el) => el * 2);
// console.log(newArr);

//*******************************************************************************************************
//3. Filter
// let arr = [2, 4, 6, 8, 10];

// Array.prototype.myFilter = function (cb) {
//   let newArr = [];

//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i])) {
//       newArr.push(this[i]);
//     }
//   }

//   return newArr;
// };

// let newArr = arr.myFilter((el) => el > 4);
// console.log(newArr);

//*******************************************************************************************************
// 4. Reduce

// let arr = [2, 4, 6, 8, 10];

// Array.prototype.myReduce = function (cb, initialValue) {
//   let acc = initialValue;

//   for (let i = 0; i < this.length; i++) {
//     acc = acc ? cb(acc, this[i]) : this[i];
//   }

//   return acc;
// };

// let ans = arr.myReduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(ans);

//*******************************************************************************************************
// 5. Call

// let person = { name: "Mukesh" };

// function printData(age) {
//   console.log(`My name is ${this.name}, my age is ${age}`);
// }

// Function.prototype.myCall = function(context = {},...args){
//     if(typeof this !== 'function'){
//         throw new Error('Invalid....');
//     }

//     //Make a fn key and stores function into context
//     context.fn = this;

//     //Call funtion with arguments
//     context.fn(...args);
// }

// printData.myCall(person, 22);

//*******************************************************************************************************
// 5. Apply

// let person = { name: "Mukesh" };

// function printData(age, lastName) {
//   console.log(`My name is ${this.name} ${lastName}, my age is ${age}`);
// }

// Function.prototype.myApply = function (context = {},...args) {
//   if (typeof this !== "function") {
//     throw new Error("Invalid....");
//   }

//   if (!Array.isArray(...args)) {
//     throw new Error("TypeError....");
//   }

//   //Make a fn key and stores function into context
//   context.fn = this;

//   //Call funtion with arguments
//   context.fn(...args);
// };

// printData.myApply(person, [22],["Kir"]);

//*******************************************************************************************************
// 6. Bind
// let person = { name: "Mukesh" };

// function printData(age, lastName) {
//   console.log(`My name is ${this.name} ${lastName}, my age is ${age}`);
// }

// Function.prototype.myBind = function (context = {}, ...args1) {
//   if (typeof this !== "function") {
//     throw new Error("Invalid....");
//   }

//   //Make a fn key and stores function into context
//   context.fn = this;

//   return function (...args2) {
//     //Call funtion with arguments
//     context.fn(...args1, ...args2);
//   };
// };

// // let myFunc = printData.myBind(person, 22, "Kir");
// // myFunc();

// let myFunc = printData.myBind(person);
// myFunc(22, "Kir");

//*******************************************************************************************************
// 7. Flat

// let arr = [1, 2, [3, 4]];

// Array.prototype.myFlat = function (depth) {
//   let newArr = [];

//   if (!Array.isArray(this)) {
//     throw new Error("Invalid........");
//   }

//   this.forEach((ele) => {
//     if (Array.isArray(ele) && depth > 0) {
//       newArr.push(...ele.myFlat(depth - 1));
//     } else {
//       newArr.push(ele);
//     }
//   });

//   return newArr;
// };

// let newArr = arr.myFlat(2);
// console.log(newArr);

//*******************************************************************************************************
// 8. Deep Copy
//Note : Spread operetor works only on single array or object if nested then not working

// //For array's deep copy
// let arr = [1, 2, [3, 4]];

// function deepCopy(val) {
//   if (["string", "number", "boolean"].includes(typeof val)) {
//     return val;
//   }

//   //If nested then recursive call and Return new array
//   if (Array.isArray(val)) {
//     return val.map((el) => deepCopy(el));
//   }
// }

// let copyArr = deepCopy(arr);
// copyArr[2].push(9);
// console.log(copyArr);   //Only changes in copyArr
// console.log(arr);

//For object's deep copy
// let obj1 = {
//   name: "Mukesh",
//   address: {
//     city: "Aburoad",
//     pinCode: 307026,
//   },
// };

// function deepCopy(val) {
//   if (["string", "number", "boolean"].includes(typeof val)) {
//     return val;
//   }

//   //If nested then recursive call and Return new array
//   else if (Array.isArray(val)) {
//     return val.map((el) => deepCopy(el));
//   }

//   //When we passed object
//   else{
//      return Object.keys(val).reduce((acc,key)=>{
//         acc[key] = deepCopy(val[key]);
//         return acc;
//       },{})
//   }
// }

// let obj2 = deepCopy(obj1);
// obj2.address.city = "Sirohi";
// console.log(obj1);
// console.log(obj2);    //Only changes in obj2

//*******************************************************************************************************
//9. Compare two objects/arrays

//It works on when keys are on same order
//console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

//Polyfill
// let obj1 = { a: 1, b: 2 };
// let obj2 = { a: 1, b: 2 };

// //Check for object or not
// const isObject = (object) => {
//   return object != null && typeof object === "object";
// };

// function compareObject(obj1, obj2) {
//   let keyArrObj1 = Object.keys(obj1);
//   let keyArrObj2 = Object.keys(obj2);

//   //Check if length not same then return false
//   if (keyArrObj1.length !== keyArrObj2.length) return false;

//   for (let key of keyArrObj1) {
//     let value1 = keyArrObj1[key];
//     let value2 = keyArrObj1[key];

//     let isObjects = isObject(value1) && isObject(value2);

//     //Not object and value are not same
//     if (!isObjects && value1 !== value2) return false;

//     //For the nested object
//     if (isObjects && !compareObject(value1, value2)) return false;
//   }

//   return true;
// }

// console.log(compareObject(obj1, obj2));

//*******************************************************************************************************
//10. Promise all
//Must be all promisess will resolve
//If one of promise will reject then throw the error
// It maintain the order whatever we give some time less or more Depends on which order we pass into promise.all
//Its return output as array format

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 1");
//   }, 1000);
// });

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 2");
//   }, 100);
// });

// Promise.all([promise1, promise2])
//   .then((el) => console.log(el))
//   .catch((el) => console.log(el));

// Promise.myAll = function (promiseArr) {
//   let result = [];
//   let counter = 0;
//   return new Promise((resolve, reject) => {
//     promiseArr.forEach((promise, index) => {
//       promise
//         .then((res) => {
//           counter++;
//           result[index] = res;
//           if (counter === promiseArr.length) {
//             resolve(result);
//           }
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   });
// };

// Promise.myAll([promise1, promise2])
//   .then((el) => console.log(el))
//   .catch((el) => console.log(el));

//*******************************************************************************************************
//11 Promise.any
//Which promise resolve first that is executed first
//It does'nt care about reject only care about first resolve promise
//If all promisess rejected then error

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("I'm first promise!");
//   }, 1000);
// });

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("I'm second promise!");
//   }, 500);
// });

// Promise.any([promise1, promise2])
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

// Promise.myAny = function (promiseArr) {
//   let counter = 0;
//   let errors = [];

//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < promiseArr.length; i++) {
//       promiseArr[i]
//         .then((data) => {
//           resolve(data);
//         })
//         .catch((e) => {
//           counter++;
//           errors[i] = e;
//           if (counter === promiseArr.length) {
//             reject(new AggregateError(errors, "All promises were rejected"));
//           }
//         });
//     }
//   });
// };

// Promise.myAny([promise1, promise2])
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

//*******************************************************************************************************
//12 . Promise.race
// Which promise resolve or reject first that will exceute first

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("I'm first promise!");
//   }, 1000);
// });

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("I'm second promise!");
//   }, 500);
// });

// Promise.race([promise1, promise2])
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

// Promise.myRace = function (promiseArr) {
//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < promiseArr.length; i++) {
//       promiseArr[i].then(
//         (data) => resolve(data),
//         (e) => reject(e)
//       );
//     }
//   });
// };

// Promise.myRace([promise1, promise2])
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

//*******************************************************************************************************
