//all function
//anonymous func
setTimeout(function(){
  console.log("hello");
},1000)
//------------------------------------

//curried function
//ฟังชันที่อยุ่ในฟังชัน / ฟังชันที่ return function
function Add(x){
  return function(y){
    return x + y
  }
}

var g = Add(2)
console.log(g(3));

// function sum3(x){
//   return function(y){
//     return function(z){
//       return x + y + z
//     }
//   }
// }
//
// var g = sum3(3)
// var h = g(2)
// console.log(h(1))

//------------------------------------

//variable numer of argument
//ฟังชันที่มีตัวแปรไม่ตายตัว
function sumAll(){
  var total = 0
  for(var i = 0 ; i < sumAll.arguments.length ; i++){
    total  += sumAll.arguments[i];
  }
  return total;
}
console.log(sumAll(1,2,3,4,5,6,7,8,9,10));

//------------------------------------

//Arrow function

//traditional function
// foo = function(){
//   console.log("hello world");
// }

//change traditional to arrow function
// foo = () => {
//   console.log("hello world arrow");
// }

sum = (x,y) => {
  return x + y
}

// foo()
console.log(sum(1,5));

//reference exaple
//change this code to curry function and traditional func
//  let add = x => y => x+y
//  add(2)(3)

function add(x){
  return function(y){
    return x + y
  }
}

console.log(add(7)(9));
//  *** same call function ***
// var g = add(7)
// console.log(g(9));


function add2(x,y) {
  return x + y
}

console.log(add2(10,888));

//---------------------------------------------------------

// setTimeout(function(){
//   console.log();
// },1000)
// change anonymous func to anonymous arrow func
// setTimeout( () => {
//   console.log("onChange");
// },2000)




// function add(x){
//   return function(y){
//     return x + y
//   }
// }
//
// add7 = (x) => {
//   return (y) => {
//     return x + y
//   }
// }
//
// console.log(add7(77)(99));


//
//
// function sum3(x){
//   return (y) => {
//     return (z) = {
//         return x + y + z
//     }
//   }
// }

add3 = (x) => {
  return (y) => {
    return (z) => {
      return x + y +z
    }
  }
}

console.log(add3(3)(4)(5));

//------------------------------------

//loop + callback ใช้ map

var arr = [1,2,3,4,5,6,7,8,9,10]
arr.map( (value) => {
  console.log(value);
})


// obj + callback ใช้ foreach

var obj = {
  name : "nut",
  id : "049",
  fac : "Coe"
}

Object.keys(obj).forEach( (keys) =>{
  console.log(keys , obj[keys]);
})
