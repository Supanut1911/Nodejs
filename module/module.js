var dt = require('./lib.js')
var grade = require('./avg.js')
var bbmi = require('./bmi.js')
var cD = require('./degee.js')
var primeEiEi = require('./ckPrimeNumber.js')

console.log("Program1:table");
dt.table(25);
console.log("/---------------------------------------/");
console.log();

console.log("Program2:AvgerageGrade");
//blank for stdin
console.log("Your grade is " +grade.calAvg(47))
console.log("/---------------------------------------/");
console.log();

console.log("Program3:BMI calculate")
//blank for stdin
console.log("Your status is "+bbmi.bmi(45,172));
console.log("/---------------------------------------/");
console.log();

console.log("Program4:Degree Convertion")
//blank for stdin
console.log("AnotherDegree ::"+cD.convertDegee(25));
console.log("/---------------------------------------/");
console.log();


console.log("Program5:Check primeNubmer")
//blank for stdin
console.log(primeEiEi.gockPrime(7));
console.log("/---------------------------------------/");
console.log();
