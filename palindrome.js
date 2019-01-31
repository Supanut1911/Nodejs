//-----------------------------[STYLE_1]----------------------------------------

var palincase1 = require('./modpalin')
var palincase2 = require('./modpalin2')
let stdin = process.openStdin()
var i = 1 , str , choice
console.log("enter string:")
stdin.addListener("data" , (value) =>{
    if(i==1){
        str = value.toString().trim()
        console.log("choice : (1)CaseSensitive , (2)Non-CaseSensitive");
        
    }
    else if(i==2){
        choice = value.toString().trim()
        if(choice == 1){
            palincase1.palin1(str)
        }
        else {
            palincase2.palin2(str)
        }
        stdin.destroy()
    }
    i++
})



//------------------------------[STYLE_2]---------------------------------------
// console.log("enter string:");
// let stdin = process.openStdin()
// stdin.addListener("data", (d) => {
//
//   var str = d.toString().trim()
//   var str2 = ""
//   str = str.toLowerCase()
//   for(var i = str.length-1,j = 0    ; i >= 0  ;i--, j++){
//
//     str2 = str2 + str[i]
//   }
//
//   if(str == str2){
//     console.log("yes , it is palindrome");
//   }
//   else{
//     console.log("no");
//   }
//
//   stdin.end()
// });
//
