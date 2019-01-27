//การใช้ map
//map จะใช้ในกรณี เจอ array และ callback
var arr = [1,2,3,4,5,6,7,8,9,10]
arr.map( (value) => {
  console.log("data :"+value);
})


//การใช้ foreach
//forEach จะใช้กับ object และ callback
var person = {
  name : "Supanut",
  lname : "Laddayam",
  id : "5935512049",
  fac : "CoE"
}

Object.keys(person).forEach( (keys) => {
  console.log(keys + ":" + person[keys]);
})
