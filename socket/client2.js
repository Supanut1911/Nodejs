var net = require('net')
var HOST = '127.0.0.1'
var PORT = 6969
var ans

var stdin = process.openStdin()
var client = new net.Socket()
client.connect(PORT , HOST , () => {
    console.log('CONNECTED ! to :' + HOST + ':' + PORT)
    client.write('THANOS')
})

client.on('data' , (data) => {
  console.log('DATA :' + data);
    if(data == "OK"){
      stdin.addListener("data",(value) => {
        ans = value
        client.write(ans)
      })
    }
    else if(data == "NOPE"){
      console.log("wrong answer");
      // stdin.addListener("data",(value) => {
      //   ans = value
      //   client.write(ans)
      // })
    }
    else if(data == "WIN"){
      console.log("YEEEE HAAAA");
      console.log(ans.toString().trim());
      stdin.destroy()
      client.destroy()
    }
    else if(data == "KICK"){
      console.log("bye");
        stdin.destroy()
        client.destroy()

  }

  ans++
})

client.on('close' , () => {
  console.log('CONNECTE CLOSE!!!');
})
