
var arr = [1,2,3,4,5]

// basic_for
// for(var i = 0 ; i < arr.length ; i++){
//   console.log(arr[i]);
// }
//

// for in arry
// for (var idx in arr){
//   console.log(arr[idx]);
// }

//for in Object
var obj = {
  //pro   //pro_value
  'a'   : 1,
  'b'   : 2,
  'c'   : 3
}
for (var pro in obj){
  // console.log(pro);
  // console.log(obj[pro]);
  console.log(pro , obj[pro]);
}
