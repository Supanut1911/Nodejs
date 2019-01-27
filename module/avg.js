module.exports.calAvg = (total) => {
  var grade = ""
  if(total >= 80){
    grade = "A"
  }
  else if(total >= 75 && total < 80){
    grade = "B+"
  }
  else if(total >= 70 && total < 75){
    grade = "B"
  }
  else if(total >= 65 && total <70){
    grade ="C+"
  }
  else if(total >= 60 && total <65){
    grade = "C"
  }
  else if(total >= 55 && total < 60){
    grade = "D+"
  }
  else if(total >= 50 && total < 55){
    grade = "D"
  }
  else {
    grade = "E"
  }
  return grade
}
