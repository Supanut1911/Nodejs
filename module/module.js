var dt = require('./lib.js')
var grade = require('./avg.js')
var bbmi = require('./bmi.js')
var cD = require('./degee.js')
var primeEiEi = require('./ckPrimeNumber.js')
var i = 1,base,score,cel,wight,heigh

let stdin = process.openStdin()
console.log("enter b:");

stdin.addListener( "data", (value) => {
    
    if(i === 1){
        
        base = value
        dt.table(base)
        console.log("/------------------------------");
        console.log('enter your total score :');
    
    }
    else if(i==2){
        score = value
        console.log("Your grade is " +grade.calAvg(score))
        console.log("/------------------------------");
        console.log("Enter celsius degree:");
   
    }
    else if(i==3){
        cel = value
        console.log("anthoer degree ->" + cD.convertDegee(cel) );
        console.log("/------------------------------");
       
        console.log("enter your weight:");
        
    }
    else if(i==4){
        wight = value
        console.log("enter your heigh:");
        
    }
    else if(i==5){
        heigh = value
        console.log("your status :"+bbmi.bmi(wight,heigh));
        console.log("/------------------------------");
        console.log("enter number to check primeNubmer:");
        
    }
    else if(i==6){
        num = value
        primeEiEi.gockPrime(num)
        stdin.destroy()
    }
    i++

    
})
