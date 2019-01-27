module.exports.convertDegee = (c) => {
  var strR = "RomerDegree = "
  var strF = "FahrenheitDegree = "
  var strK = "Kelvin ="
  var r = 0.0
  var f = 0.0
  var k = 0.0
  var all = ""

  r = c * 4 / 5
  f = (9 * c + 3 ) / 5
  k = c + 273

  strR += r
  strR += " r,"
  all += strR

  strF += f
  strF += " f,"
  all += strF

  strK += k
  strK += " k"
  all +=strK
  return all
}
