// exports.foo = () => console.log("foo");
module.exports.table = (x) => {
  var tmp = x
  for(var i = 1 ; i <= 12 ;i++){
      console.log(tmp +"*" , i ,"= ",tmp*i);
    }
  return;
}
