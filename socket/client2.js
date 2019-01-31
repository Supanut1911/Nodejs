var net = require('net')
var HOST = 'coc.waterphuket.com'
var PORT = 6969
var ans = 5

var client = new net.Socket()
client.connect(PORT , HOST , () => {
    console.log('CONNECTED ! to :' + HOST + ':' + PORT)
    client.write('THANOS')
})

client.on('data' , (data) => {
  console.log('DATA :' + data);
  if(data == "OK"){
    client.write(ans.toString())
  }
  else if(data == "WRONG"){
    console.log("wrong answer");
    client.write(ans.toString())
  }
  else if(data == "BINGO"){
    console.log("YEEEE HAAAA");
    console.log(ans);
    client.destroy()
  }
  else if(data == "END"){
    console.log("bye");
      client.destroy()
  }
  ans++
})

client.on('close' , () => {
  console.log('CONNECTE CLOSE!!!');
})
