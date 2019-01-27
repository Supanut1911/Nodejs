//Standard input
//เรียกใช้ จาก process object  , แล้วแสดงผลโดยใช้ callback_function
//ด้วยการดักจับ event "data" ใน add listener

var x = process.openStdin()
x.addListener("data" , (d) => {

  // console.log(d.toString().trim())             //supanut
  // console.log(d.toString().trim().length)      //7
  // console.log(d.toString().trim().substring(2,5)) //pan
 console.log(d.toString().trim().toUpperCase())    
  x.destroy()
})
