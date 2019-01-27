// exports.foo = () => console.log("foo");
module.exports.table = (x) => {
  for(var i = 1 ; i <= 12 ;i++){
      console.log(x + "*" + i +"= "+x*i);
    }
  return;
}
