var net = require('net')
var HOST = 'coc.waterphuket.com'
var PORT = 6969;
var tmp = 1
var i = 0
var client = new net.Socket()
client.connect(PORT , HOST , function() {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.write('5935512049')
})

client.on('data',function(data){
     console.log('DATA: '+data);

    if(i == 4){
        client.destroy()
    }
    if(data == "OK"){
        client.write(tmp.toString())
    }
    else if(data == "WRONG"){
        client.write(tmp.toString())
    }
    else if(data == "BINGO"){
        client.destroy()
        console.log(tmp);
    }

    tmp++
    i++

})

client.on('close',function(){
    console.log('Connection closed');

})
