var net =require('net')
var HOST = "coc.waterphuket.com"
var PORT = 6969
var num = 
var client = new net.Socket()

client.connect(PORT , HOST , () =>  {
  console.log('CONNECTED to : '+HOST +':'+ PORT);
  client.write('raven')
})

client.on('data' , (data) => {
  console.log('DATA :' + data);
  if (data == 'OK'){
    client.write(num.toString())
  }
  else if(data == 'WRONG'){
    console.log("ERROR");
  }
  else if(data == "BINGO"){
    console.log('YEEEE HAA');
    console.log(num);
    client.destroy()
  }
})

client.on('close' , () => {
  console.log('connect close');
})
