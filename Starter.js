var person = {
    name : "Bob",
    age : 45 ,
    birthday : {
        dd : 5,
        mm : 11,
        yy : 1900
    },
    show : function(){
        console.log("hello world");
    },
    max : function(x,y){
        if(x > y){
            return x
        }
        else{
            return y
        }
    }

}


// console.log(person.name)
// console.log(person.birthday.dd);
console.log(person.max(7,9));
// console.log(person.show())
