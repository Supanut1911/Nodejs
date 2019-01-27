// == and ===

// Sting have 2 types , String type and Object type

//String type
var str = 'Supanut'

//String Object type
var str2 = new String("Supanut")

// == จะเทียบแต่ value
if(str == str2){
  console.log("equals");
}else{
  console.log("not equals");
}


// ===  จะเทียบทั้ง value และ type
if(str === str2){
  console.log("equals");
}else{
  console.log("not equals");
}


//**************warning********************
//กรณีที่เป็น obj ทั้ง 2 ตัว เราจะไม่สามารถเทียบได้
var let1 = new String("supanut")
var let2 = new String("supanut")

if(let1 == let2 ){
  console.log("equals");
}else{
  console.log("not equals");
}

if(let1 === let2 ){
  console.log("equals");
}else {
  console.log("not equals");
}
