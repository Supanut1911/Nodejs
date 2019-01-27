//การเปลี่ยนเป้น arrow funciton ให้เอา คำว่า function ออก
//ใส่ = ตามหลังชื่อฟังชัน
//แล้วใส่ => เพิ่มเข้าไปหลัง (parameter)

//0.conver traditional function to traditional Arrow function
function add0(x,y){
  return x + y
}
console.log(add0(456,654))
//<----><----><----><----><----><----><---->
add0 = (x,y) => x + y
console.log(add0(2000,3500));



//1.convert anonymous fucntion to anonymous Arrow function

setTimeout(function(){
  console.log();
},2000)

//change anonymous func to anonymous arrow func
//<----><----><----><----><----><----><---->
setTimeout( () => {
  console.log("onChange");
},2000)


//2.covert curry function to curry arrow function
function add(x){
  return function(y){
    return x + y
  }
}
//<----><----><----><----><----><----><---->
add1 = (x) => {
  return (y) => {
    return x + y
  }
}
console.log(add1(77)(99));

//--------------------
// add2 = (x) => {
//   return (y) => {
//     return (z) => {
//       return x + y +z
//     }
//   }
// }
//
// console.log(add2(3)(4)(5));
