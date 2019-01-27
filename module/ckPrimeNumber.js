module.exports.gockPrime = (x) => {

  var ntpn = false;

  for(var i = 2 ; i <= x/2 ; i++){
    if(x % i == 0){
      ntpn = true;
      break;
    }
  }
  if(x != 1){
      if(ntpn == false){
        console.log(x + " is primeNubmer");
      }
      else {
        console.log(x + " is not primeNubmer");
      }
  }
    return;
}
