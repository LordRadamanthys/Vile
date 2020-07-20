import SocketIOClient from 'socket.io-client'

const socket = SocketIOClient('http://192.168.15.7:3333', {
    autoConnect: false,
})

function connect(){
    socket.connect()
}



export{connect,socket} 