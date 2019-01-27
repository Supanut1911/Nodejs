// var strR = "RomerDegree = "
// var strF = "FahrenheitDegree = "
// var strK = "Kelvin ="
// var r = 0.0
// var f = 0.0
// var k = 0.0
// var all = ""
// var c = 25
//
// r = c * 4 / 5
// f = (9 * c + 3 ) / 5
// k = c + 273
//
// strR += r
// strR += " r,"
// all += strR
//
// strF += f
// strF += " f,"
// all += strF
//
// strK += k
// strK += " k"
// all +=strK
//
//
//
//
// console.log(all);

var x = 17
var ntpn = false;

for(var i = 2 ; i <= x/2; i++){
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

console.log("stop");
