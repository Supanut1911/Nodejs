// var str = d
// // str = stdin
// var str2 = ""
// console.log(str);
// for(var i = str.length-1,j = 0    ; i >= 0  ;i--, j++){
//
//        str2 = str2 + str[i]
// }
//
// if(str == str2){
//   console.log("yes , it is palindrome");
// }
// else{
//   console.log("no");
// }
console.log("enter string:");
let stdin = process.openStdin()
stdin.addListener("data", (d) => {

 var str = d.toString().trim()
 var str2 = ""
 str = str.toLowerCase()
 for(var i = str.length-1,j = 0    ; i >= 0  ;i--, j++){

        str2 = str2 + str[i]
 }

 if(str == str2){
   console.log("yes , it is palindrome");
 }
 else{
   console.log("no");
 }

 stdin.end()
});


let stdin = process.openStdin()

var str = stdin

//
//
//





//------------------------------------------------------------------------------
// var str = 'axba'
// var status = true
//
// for(var i =0;i<str.length;i++){
//   if(str[i] == str[str.length-1-i]){
//     status = true;
//   }
//   else{
//     status = false;
//     break;
//   }
// }
//
// if(status == true ){
//   console.log("yes it palindrome")
// }
// else{
//   console.log("no")
// }
