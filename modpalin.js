module.exports.palin1 = (letter) => {
    var str = letter
    var status = true
            for(var i =0;i<str.length;i++){
              if(str[i] == str[str.length-1-i]){
                status = true;
              }
              else{
                status = false;
                break;
              }
            }
          
            if(status == true ){
              console.log("yes it's palindrome")
            }
            else{
              console.log("no it's not palinfrome")
            }
}