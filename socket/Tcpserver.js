var net = require('net')
var HOST = '127.0.0.1'
var PORT = 6969
var server = net.createServer()
var magic = 666
var count = 0
server.listen(PORT,HOST)
server.on('connection',function(sock){
  console.log('CONNECTED: ' + sock.remoteAddress + ':'+sock.remotePort);
  sock.on('data',function(data){
    console.log('DATA' + sock.remoteAddress + ':' + data);
    if(count == 0){
          sock.write("OK")
          count++
    }
    else if(count < 6 ){
      if(data == magic){
        sock.write("WIN")
        sock.end()
        count = 0
      }
      else {
        sock.write("NOPE")
        count++
      }
    }
    else {
      sock.write("KICK")
      count = 0

    }
  })
  sock.on('close',function(data){
    console.log('CLOSED:'+ sock.remoteAddress + ' ' + sock.remotePort);
  })
})
