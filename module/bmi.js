module.exports.bmi = (w,h) => {
  var bmi = 0.0
  var high = h/100
  var status = ""
  bmi = w/(high * high)
  if(bmi < 18.5){
    status += "Underweight"
  }
  else if(bmi >= 18.5 && bmi <=24.9){
    status += "Healthy Weight"
  }
  else if(bmi >= 25 && bmi <=29.9){
    status += "Overweight"
  }
  else if(bmi >= 30 && bmi <=34.9){
    status += "Obese"
  }
  else if(bmi >= 35 && bmi <=39.9){
    status += "Severely Obese"
  }
  else if(bmi >= 40){
    status += "Morbidly Obese"
  }
  return status
}
