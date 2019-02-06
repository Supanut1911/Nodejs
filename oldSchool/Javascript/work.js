 foo = () => {
  alert("hi");
}
//
// foo2 = () => {
//   document.getElementById('bigDaddy')
// }

// foo2 = () => {
//   jQuery('#tmp').text("lion")
// }


foo2 = () => {
  $('.tmp').text("dragon")
}

window.onload = () => {
  $('.tmp').text("KaiDo")
}

//jQuery/$ === document.getElementById
// # === id
// . === class
//method .text === .innerHTML
//method .click === onChange
//method window.onload   better is ready()
